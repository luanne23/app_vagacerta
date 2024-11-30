import Usuario from '../models/usuario';
import api from '../services/api';  // Importa a configuração do axios


const userRepository = {
  findAll() {
    return api.get('/usuarios')  
      .then(response => response.data['user'])
      .catch(error => {
        console.error('Erro ao buscar usuários', error);
        throw error;
      });
  },

 
  findById(id: number) {
    const response =  api.get(`/usuarios/${id}`)  
      .then(response => response.data)
      .catch(error => {
        console.error(`Erro ao buscar usuário com ID ${id}`, error);
        return null;
      });
      console.log(response);
      return response;
  },

  login(email: String, senha : String) {
    return api.post(`/usuarios/login`, {email: email, senha : senha})  
      .then(response => response.data['usuario'])
      .catch(error => {
        console.error(`Erro de Login`, error);
        return null;
      });
  },

  // Função para criar um novo usuário
  create(usuario: Usuario) {
    return api.post('/usuarios', usuario)  
      .then(response => response.data['user'])
      .catch(error => {
        console.error('Erro ao criar usuário', error);
        throw error;
      });
  },

  update(id: number, usuario: Usuario) {
    return api.put(`/usuarios/${id}`, usuario)
      .then(response => response.data['user'])
      .catch(error => {
        console.error(`Erro ao atualizar usuário com ID ${id}`, error);
        return null;
      });
  },

  remove(id: number) {
    return api.delete(`/usuarios/${id}`)
      .then(response => response.data['user'])
      .catch(error => {
        console.error(`Erro ao remover usuário com ID ${id}`, error);
        return null;
      });
  },
};

export default userRepository;
