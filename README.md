# Desafio Técnico - Testes Automatizados com Cypress na Página ViaCEP

Este repositório contém os arquivos necessários para realizar testes automatizados na página [ViaCEP](https://viacep.com.br/), utilizando o framework Cypress.

Abaixo estão as instruções para clonar o repositório, instalar o Cypress e executar os testes.

---

## **Pré-requisitos**

Antes de iniciar, garanta que você possui os seguintes itens instalados no seu ambiente:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/)

---

## **Passo 1: Clonar o Repositório**

1. Abra o terminal no seu computador.
2. Navegue até o diretório onde deseja salvar o projeto.
3. Execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/Trovisck/Desafio-ViaCEP.git

```

4. Após o download, entre na pasta do projeto:
   ```bash
   cd Desafio-ViaCEP
   ```
## Passo 2: Instalar as Dependências

1. Certifique-se de estar na raiz do projeto.
2. Execute o comando abaixo para instalar todas as dependências do projeto:

   ```bash
   npm install
- Esse comando instalará o Cypress e outras bibliotecas necessárias para os testes.
## Passo 3: Abrir o Cypress

1. Para abrir a interface do Cypress, execute o comando:

   ```bash
   npx cypress open

2. A interface gráfica do Cypress será exibida, mostrando a lista de testes disponíveis no projeto.  
3. Clique no teste ConsultaCep.
4. Aguarde até o teste ser realizado.

## Passo 4: Executar os Testes em Modo Headless (Opcional)

- Se preferir rodar os testes diretamente no terminal, sem a interface gráfica, utilize o comando:

   ```bash
   npx cypress run
- Os resultados dos testes serão exibidos diretamente no terminal.

## Estrutura do Projeto

- **`cypress/fixtures/`**: Contém dados fictícios que podem ser utilizados durante os testes.  
- **`cypress/e2e/`**: Contém os arquivos de testes automatizados para a página ViaCEP.  
- **`cypress/support/`**: Inclui arquivos de configuração e suporte para os testes.  
- **`package.json`**: Lista todas as dependências e configurações do projeto.

## Dúvidas

Caso encontre algum problema ou tenha dúvidas, entre em contato pelo e-mail:  
**[joaovictorch06@gmail.com](mailto:joaovictorch06@gmail.com)**

