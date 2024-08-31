package com.teste.cliTest;

public class App {

    public static void main(String[] args) {
        if (args.length < 3) {
            System.out.println("Uso de CLI comando: java -jar cli.jar analyze --depth <n> \"{phrase}\" [--verbose]");
            return;
        }
        int depth = Integer.parseInt(args[2]);
        String phrase = args[3];
        boolean verbose = args.length > 4 && args[4].equals("--verbose");
    }
}