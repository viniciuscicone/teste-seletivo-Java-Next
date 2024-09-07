package com.teste.cliTest;

import com.teste.cliTest.utils.analyzer.Analyzer;

public class App {

    public static void main(String[] args) {
        // Marca o tempo de início do programa
        long startTime = System.currentTimeMillis();
        long parameterTime = System.currentTimeMillis();
        // Exibe a instrução de uso do comando CLI
        System.out.println("Uso de CLI comando: java -jar App.jar --depth 3 \"Eu vi gorilas e papagaios\"");
        // Converte o primeiro argumento para um inteiro (profundidade)
        int depth = Integer.parseInt(args[0]);
        // Armazena a frase passada como segundo argumento
        String phrase = args[1];

        try {
            // Cria uma instância do Analyzer
            Analyzer analyz = new Analyzer();
            // Chama o método de análise com a frase e a profundidade
            analyz.getAnalyze(phrase, depth);
            // Marca o tempo de término do programa
            long endTime = System.currentTimeMillis();
            // Se o argumento "--verbose" for passado, exibe os tempos de execução
            if (args.length > 2 && args[2].equals("--verbose")) {
                System.out.println("Tempo de carregamento do parametro: " + (parameterTime - startTime) + "ms");
                System.out.println("Tempo de verificação da frase: " + (endTime - startTime) + "ms");
            }
        } catch (Exception e) {
            // Exibe a mensagem de erro caso ocorra uma exceção
            System.out.printf(e.getMessage());
        }
    }
}