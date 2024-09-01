package com.teste.cliTest;

import com.teste.cliTest.utils.analyzer.Analyzer;

public class App {

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        long parameterTime = System.currentTimeMillis();
        System.out.println("Uso de CLI comando: java -jar App.jar analyze --depth 3 \"Eu vi gorilas e papagaios\"");
        int depth = Integer.parseInt(args[0]);
        String phrase = args[1];

        try {
            Analyzer analyz = new Analyzer();
            analyz.getAnalyze(phrase, depth);
            long endTime = System.currentTimeMillis();
            if (args.length > 2 && args[2].equals("--verbose")) {
                System.out.println("Tempo de carregamento do parametro: " + (parameterTime - startTime) + "ms");
                System.out.println("Tempo de verificação da frase: " + (endTime - startTime) + "ms");
            }
        } catch (Exception e) {
            System.out.printf(e.getMessage());
        }
    }
}