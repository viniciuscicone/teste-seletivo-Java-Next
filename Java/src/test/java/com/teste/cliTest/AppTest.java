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
}
