## Aplicação de Gerenciamento de Vagas

Este projeto é uma aplicação desenvolvida com **React Native** e **Expo**, projetada para o gerenciamento de usuários e vagas.

## Testando o aplicativo
Para testar o app é necessario a api para a consulta de dados. Neste é necessario primeiro rodar a api para depois rodar o app de vagas.   
# 1. Executar a api de dados 
1. Clone o repositório: 
```sh 
git clone https://github.com/luanne23/api_vagacerta.git 
```
2. Entre na pasta do projeto: 
```sh
cd ./api_vagacerta
```
3. Instale as dependências: 
```sh
npm install
``` 
4. Inicie o servidor: 
```sh
npm start
``` 
# 2. Executar o APP
1. Clone o repositório: 
```sh
git clone https://github.com/luanne23/app_vagacerta.git
```
2. No arquivo `/services/api.ts` substitua o ip do dispositivo onde esta rodando a api: 
```javascript
import axios from 'axios';
const api = axios.create({ baseURL: 'http://ip_da_dispositivo:3000/api' });
export default api;
``` 
3. Entre na pasta do projeto: 
```sh
cd ./app_vagacerta 
```
4. Instale as dependências: 
```sh
yarn 
``` 
5. Inicie o servidor: 
```sh
npx expo start
``` 
## Estrutura de Pastas e arquivos

```plaintext 
├── components                                # Componentes reutilizáveis da aplicação
│   ├── Button                                # Botão customizado
│   │   ├── index.tsx                         # Componente de botão
│   │   └── styles.ts                         # Estilos do botão
│   ├── Input                                 # Campo de entrada de dados
│   │   ├── index.tsx                         # Componente de input
│   │   └── styles.ts                         # Estilos do input
│   ├── Logo                                  # Componente de logo da aplicação
│   │   ├── index.tsx                         # Exibição da logo
│   │   └── styles.ts                         # Estilos da logo
│   └── VagaCard                              # Componente de exibição de vagas
│       ├── index.tsx                         # Card de vagas
│       └── styles.ts                         # Estilos do card de vagas
├── contexto                                  # Contexto global da aplicação
│   └── UsuarioContexto.tsx                   # Contexto para gerenciamento do usuário
├── models                                    # Modelos de dados da aplicação
│   ├── usuario.ts                            # Modelo para o usuário
│   └── vaga.ts                               # Modelo para vagas
├── repositories                              # Repositórios para acesso aos dados
│   ├── UsuarioRepository.ts                  # Repositório para manipulação de usuários
│   └── VagaRepository.ts                     # Repositório para manipulação de vagas
├── screens                                   # Telas da aplicação
│   ├── Details                               # Tela de detalhes
│   │   ├── index.tsx                         # Exibe detalhes de usuários ou vagas
│   │   └── styles.ts                         # Estilos da tela de detalhes
│   ├── Form                                  # Tela de formulário
│   │   ├── index.tsx                         # Formulário para login/cadastro
│   │   └── styles.ts                         # Estilos do formulário
│   ├── List                                  # Tela de listagem
│   │   ├── index.tsx                         # Lista de vagas ou usuários
│   │   └── styles.ts                         # Estilos da lista
│   ├── Login                                 # Tela de login
│   │   ├── index.tsx                         # Entrada de credenciais para login
│   │   └── styles.ts                         # Estilos da tela de login
│   └── Profile                               # Tela de perfil do usuário
│       ├── index.tsx                         # Exibe e edita informações do usuário
│       └── styles.ts                         # Estilos da tela de perfil
├── services                                  # Serviços para comunicação externa
│   └── api.ts                                # Configuração e chamadas à API
├── theme                                     # Tema e estilos globais
│   └── index.ts                              # Configurações de tema (cores, fontes)
├── utils                                     # Utilitários e funções auxiliares
│   ├── DateUtils.ts                          # Funções relacionadas a manipulação de datas
│   └── Types.ts                              # Definições de tipos globais
├── App.tsx                                   # Arquivo principal que inicializa o aplicativo
├── app.json                                  # Configurações do aplicativo Expo
└── babel.config.js                           # Configuração do Babel para transpilar o código
