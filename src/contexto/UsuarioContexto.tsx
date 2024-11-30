import React, { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Usuario from "../models/usuario";

interface UsuarioContextProps {
  usuario: Usuario | null;
  logar: (user: Usuario) => Promise<void>;
  logof: () => Promise<void>; 
}

interface UsuarioProviderProps {
  children: ReactNode;
}

// Chave para armazenar o usuário no AsyncStorage
const USUARIO_STORAGE_KEY = "@app:usuario";

export const UsuarioContext = createContext<UsuarioContextProps>({
  usuario: null,
  logar: async () => {},
  logof: async () => {},
});

function UsuarioProvider({ children }: UsuarioProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // Função para salvar o usuário no AsyncStorage e atualizar o estado
  async function logar(user: Usuario) {
    try {
      await AsyncStorage.setItem(USUARIO_STORAGE_KEY, JSON.stringify(user));
      setUsuario(user);
    } catch (error) {
      console.error("Erro ao salvar usuário no AsyncStorage:", error);
    }
  }

  // Função para remover o usuário do AsyncStorage e limpar o estado
  async function logof() {
    try {
      await AsyncStorage.removeItem(USUARIO_STORAGE_KEY);
      setUsuario(null);
    } catch (error) {
      console.error("Erro ao remover usuário do AsyncStorage:", error);
    }
  }

  
  useEffect(() => {
    async function carregarUsuario() {
      try {
        const storedUser = await AsyncStorage.getItem(USUARIO_STORAGE_KEY);
        if (storedUser) {
          setUsuario(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Erro ao carregar usuário do AsyncStorage:", error);
      }
    }

    carregarUsuario();
  }, []);

  return (
    <UsuarioContext.Provider value={{ usuario, logar, logof }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export default UsuarioProvider;
