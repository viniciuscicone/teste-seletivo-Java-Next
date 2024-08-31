package com.teste.cliTest;

import com.teste.cliTest.utils.analyzer.Analyzer;

public class App {

    public static void main(String[] args) {
        if (args.length < 3) {
            System.out.println("Uso de CLI comando: java -jar cli.jar getAnalyze --depth <n> \"{phrase}\" [--verbose]");
        }
        int depth = Integer.parseInt(args[1]);
        String phrase = args[2];
        boolean verbose = args.length > 3 && args[3].equals("--verbose");
        try {

            Analyzer analyz = new Analyzer();
            analyz.getAnalyze(phrase, depth, verbose);

        } catch (Exception e) {
            System.out.printf(e.getMessage());
        }

    }
}