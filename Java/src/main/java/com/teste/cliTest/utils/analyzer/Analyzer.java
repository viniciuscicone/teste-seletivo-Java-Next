package com.teste.cliTest.utils.analyzer;
import com.teste.cliTest.utils.hierarchyLoader.HierarchyLoader;

import java.io.IOException;
import java.util.Map;

public class Analyzer {
    // Mapa estático para armazenar a hierarquia carregada
    static Map<String, Object> hierarchy;
    // Construtor que carrega a hierarquia ao criar uma instância do Analyzer
    public Analyzer() throws IOException {
        HierarchyLoader loader = new HierarchyLoader();
        hierarchy = loader.loadHierarchy("src/main/resources/dicts/hierarchy.json");
    }
    // Método recursivo para encontrar o tipo de animal na hierarquia
    static String findAnimalType(Map<String, Object> hierarchy, String animalName) {
        for (Map.Entry<String, Object> entry : hierarchy.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();

            if (value instanceof Map) {
                // Chama recursivamente se o valor for um mapa
                String result = findAnimalType((Map<String, Object>) value, animalName);
                if (result != null) {
                    return result; // Retorna o resultado diretamente
                }
            } else if (value instanceof Iterable) {
                // Itera sobre a lista se o valor for uma coleção
                for (Object item : (Iterable<?>) value) {
                    if (animalName.equalsIgnoreCase(item.toString())) {
                        return key; // Retorna o tipo do animal encontrado
                    }
                }
            }
        }
        return null;
    }
    // Método para analisar a frase e encontrar os tipos de animais
    public void getAnalyze(String phrase, int depth) {
        // Divide a frase em palavras
        String[] animalNames = phrase.split(" ");
        for (String animalName : animalNames) {
            // Encontra o tipo de cada animal na hierarquia
            String animalType = findAnimalType(hierarchy, animalName);

            if (animalType != null) {
                // Exibe o tipo do animal encontrado
                System.out.println("1 Valor encontrado " + animalName + ": " + animalType);
            }
        }
    }
}