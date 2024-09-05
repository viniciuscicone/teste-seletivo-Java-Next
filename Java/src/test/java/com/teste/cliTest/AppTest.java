package com.teste.cliTest;

import org.junit.jupiter.api.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.*;

class AppTest {

    @Test
    public void testMain() {

        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        String[] args = {"3", "Eu vi gorilas e papagaios", "--verbose"};

        App.main(args);

        String output = outContent.toString();
        assertTrue(output.contains("Uso de CLI comando: java -jar App.jar analyze --depth 3 \"Eu vi gorilas e papagaios\""));
        assertTrue(output.contains("1 Valor encontrado gorilas: Primatas"));
        assertTrue(output.contains("1 Valor encontrado papagaios: Pássaros"));
        assertTrue(output.contains("Tempo de carregamento do parametro:"));
        assertTrue(output.contains("Tempo de verificação da frase:"));
    }

    @Test
    public void test5000words() {
        // Redireciona a saída do sistema para capturar a saída do programa
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        // Gera uma frase com 5000 palavras
        StringBuilder longPhrase = new StringBuilder();
        for (int i = 0; i < 5000; i++) {
            longPhrase.append("animal").append(i).append(" ");
        }

        // Define os argumentos para o programa
        String[] args = {"3", longPhrase.toString().trim(), "--verbose"};

        // Executa o método principal do aplicativo
        App.main(args);

        // Captura a saída do programa
        String output = outContent.toString();

        // Verifica se a saída contém as informações esperadas
        assertTrue(output.contains("Uso de CLI comando: java -jar App.jar analyze --depth 3"));
        assertTrue(output.contains("Tempo de carregamento do parametro:"));
        assertTrue(output.contains("Tempo de verificação da frase:"));

        // Opcional: Verifique se a saída contém alguns dos valores esperados
        // assertTrue(output.contains("1 Valor encontrado animal0:"));
        // assertTrue(output.contains("1 Valor encontrado animal4999:"));
    }
}
