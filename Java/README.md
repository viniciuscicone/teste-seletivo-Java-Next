# CLI Animal Analyzer

Este projeto é uma aplicação CLI (Interface de Linha de Comando) que analisa frases para identificar tipos de animais com base em uma hierarquia definida em um arquivo JSON.

## Estrutura do Projeto

- **App.java**: Classe principal que executa a aplicação CLI.
- **Analyzer.java**: Classe responsável por analisar a frase e identificar os tipos de animais.
- **HierarchyLoader.java**: Classe responsável por carregar a hierarquia de animais a partir de um arquivo JSON.
- **hierarchy.json**: Arquivo JSON contendo a hierarquia de animais.
- **AppTest.java**: Classe de teste para verificar o comportamento da aplicação.

## Requisitos

- Java 21 ou superior
- Biblioteca Jackson para manipulação de JSON
- Biblioteca Junit para execuçao dos testes

## Configuração

1. Clone o repositório:
   ```sh
   git clone https://github.com/viniciuscicone/teste-seletivo
   -Java-Next.git
   ```

## Importar o Projeto

1. **Instale e abra o IntelliJ IDEA.**
2. **Selecione `File > New > Project from Existing Sources...`.**
3. **Navegue até o diretório do seu projeto.**

## Configurar a Configuração de Execução

1. **Vá até `Run > Edit Configurations...`.**
2. **Clique no ícone `+` e selecione `Application`.**
3. **Configure a nova configuração de execução:**
   - **Name**: App
   - **Main class**: com.teste.cliTest.App
   - **Use classpath of module**: Selecione o módulo do seu projeto.
   - **Program arguments**: 3 "Eu vi gorilas e papagaios" --verbose
   - **Working directory**: O diretório raiz do seu projeto.

## Executar no Arquivo Principal

1. **Run in current file dentro da classe `App`.**

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
