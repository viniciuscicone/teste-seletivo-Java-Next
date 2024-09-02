package com.teste.cliTest.utils.analyzer;
import com.teste.cliTest.utils.hierarchyLoader.HierarchyLoader;

import java.io.IOException;
import java.util.Map;

public class Analyzer {

    static Map<String, Object> hierarchy;

    public Analyzer() throws IOException {
        HierarchyLoader loader = new HierarchyLoader();
        hierarchy = loader.loadHierarchy("src/main/resources/dicts/hierarchy.json");
    }

    static String findAnimalType(Map<String, Object> hierarchy, String animalName) {
        for (Map.Entry<String, Object> entry : hierarchy.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();

            if (value instanceof Map) {
                String result = findAnimalType((Map<String, Object>) value, animalName);
                if (result != null) {
                    return result; // Retorna o resultado diretamente
                }
            } else if (value instanceof Iterable) {
                for (Object item : (Iterable<?>) value) {
                    if (animalName.equalsIgnoreCase(item.toString())) {
                        return key; // Retorna o tipo do animal encontrado
                    }
                }
            }
        }
        return null;
    }

    public void getAnalyze(String phrase, int depth) {

        String[] animalNames = phrase.split(" ");
        for (String animalName : animalNames) {
            String animalType = findAnimalType(hierarchy, animalName);

            if (animalType != null) {
                System.out.println("1 Valor encontrado " + animalName + ": " + animalType);
            }
        }
    }
}