# Tarefas+

Este é um projeto criado com NextJS, afins de estudo.

## Descrição

O Tarefas+ é um sistema desenvolvido para ajudar você a organizar seus estudos e tarefas de forma fácil e eficiente. Com ele, você pode criar, compartilhar e gerenciar suas tarefas, além de visualizar comentários e interagir com outros usuários.

## Funcionalidades

- Criação de tarefas
- Compartilhamento de tarefas públicas
- Comentários em tarefas
- Autenticação com Google
- Interface amigável e responsiva

## Estrutura do Projeto


## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [NextAuth.js](https://next-auth.js.org/)

## Configuração do Ambiente

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/tarefas-plus.git
    cd tarefas-plus
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000
    JWT_SECRET=your-jwt-secret
    NEXT_PUBLIC_URL=http://localhost:3000
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o linter para verificar o código.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.


