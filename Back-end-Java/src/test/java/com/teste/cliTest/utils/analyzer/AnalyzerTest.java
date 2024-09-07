package com.teste.cliTest.utils.analyzer;

import org.junit.jupiter.api.Test;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class AnalyzerTest {

    @Test
    public void testFindAnimalType() {
        // Cria a hierarquia de exemplo
        Map<String, Object> hierarchy = new HashMap<>();
        Map<String, Object> mamiferos = new HashMap<>();
        Map<String, Object> carnivoros = new HashMap<>();
        carnivoros.put("Felinos", List.of("Leões", "Tigres", "Jaguars", "Leopardos"));
        mamiferos.put("Carnívoros", carnivoros);
        hierarchy.put("Mamíferos", mamiferos);

        // Testa o método findAnimalType
        String result = Analyzer.findAnimalType(hierarchy, "Leões");
        assertEquals("Felinos", result);

        result = Analyzer.findAnimalType(hierarchy, "Tigres");
        assertEquals("Felinos", result);

        result = Analyzer.findAnimalType(hierarchy, "Elefantes");
        assertNull(result);
    }

    @Test
    public void testGetAnalyze() throws IOException {

        Map<String, Object> hierarchy = new HashMap<>();
        Map<String, Object> mamiferos = new HashMap<>();
        Map<String, Object> carnivoros = new HashMap<>();
        carnivoros.put("Felinos", List.of("Leões", "Tigres", "Jaguars", "Leopardos"));
        mamiferos.put("Carnívoros", carnivoros);
        hierarchy.put("Mamíferos", mamiferos);

        Analyzer analyzer = new Analyzer();


        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        analyzer.getAnalyze("Leões Tigres Elefantes", 0);

        String actualOutput = outContent.toString().replace("\r\n", "\n").trim();
        String expectedOutput = "1 Valor encontrado Leões: Felinos\n" +
                "1 Valor encontrado Tigres: Felinos";

        assertEquals(expectedOutput, actualOutput);
    }
}