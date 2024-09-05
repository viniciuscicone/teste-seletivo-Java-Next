# Hierarquia de Palavras

Este projeto é uma aplicação web desenvolvida com Next.js e TypeScript que permite ao usuário criar uma hierarquia de palavras. A aplicação permite adicionar múltiplos níveis, exibir a hierarquia de forma visual, salvar a hierarquia em um arquivo JSON e fazer o download do arquivo gerado.

## Funcionalidades

- Adicionar múltiplos níveis à hierarquia de palavras.
- Exibir a hierarquia de palavras de forma visual.
- Botão "Salvar" que gera um arquivo JSON contendo a hierarquia criada.
- Permitir o download do arquivo JSON gerado.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para desenvolvimento de aplicações web que permite renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Um superconjunto de JavaScript que adiciona tipagem estática ao código, ajudando a evitar erros e melhorar a manutenção do código.
- **React**: Uma biblioteca JavaScript para construção de interfaces de usuário, permitindo a criação de componentes reutilizáveis.
- **JestJS**: Um framework de testes em JavaScript que facilita a criação e execução de testes automatizados, garantindo a correção do código.

## Estrutura do Projeto

A hierarquia de palavras é representada no estado do React e convertida para JSON no momento de salvar.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/viniciuscicone/teste-seletivo-Java-Next.git
   ```

## Para rodar o projeto Next.js no navegador, a pessoa precisará:

* Instalar **Node.js** e **NPM**.
  <br><br>
* Navegue até o diretório:
  <br><br>
* Clonar o repositório do projeto.
  <br><br>
* Instale as dependências: **npm install**
  <br><br>
* Executar os scripts disponíveis para desenvolvimento, produçao, desenvolvimento, linting e testes.
  <br><br>
* Execute o projeto em modo de desenvolvimento: **npm run dev**
  <br><br>
* Construa o projeto para produção: **npm run build**
  <br><br>
* Como Executar os Testes
  Execute os testes: **npm run test**
  <br><br>
* Execute os testes em modo contínuo (CI): **npm run test:ci**

  ## Estrutura do JSON


  ```json**
    {
    "Animais": {
      "Mamíferos": {
        "Carnívoros": {
          "Felinos": ["Leões", "Tigres", "Jaguars", "Leopardos"]
        },
        "Herbívoros": {
          "Equídeos": ["Cavalos", "Zebras", "Asnos"],
          "Bovídeos": ["Bois", "Búfalos", "Antílopes", "Cabras"],
          "Primatas": ["Gorilas", "Chimpanzés", "Orangotangos"]
        }
      },
      "Aves": {
        "Rapinas": ["Águias", "Falcões", "Corujas", "Milhafres"],
        "Pássaros": ["Canários", "Papagaios", "Pardais", "Rouxinóis"]
      }
    }
  }
  ```
