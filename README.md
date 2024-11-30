# Aplicação de Gerenciamento de Vagas

Este projeto é uma aplicação desenvolvida com **React Native** e **Expo**, projetada para o gerenciamento de usuários e vagas.

## Estrutura do Projeto

## Estrutura de Pastas

```plaintext
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
