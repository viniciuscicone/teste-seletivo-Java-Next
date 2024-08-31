package com.teste.cliTest.utils.analyzer;

import com.teste.cliTest.utils.hierarchyLoader.HierarchyLoader;

import java.io.IOException;
import java.util.Map;

public class Analyzer {

    private Map<String, Object> hierarchy;

    public Analyzer() throws IOException {
        HierarchyLoader loader = new HierarchyLoader();
        this.hierarchy = loader.loadHierarchy("src/main/resources/dicts/hierarchy.json");
    }

    public Void getAnalyze(String phrase, int depth, boolean verbose) {

        long startTime = System.currentTimeMillis();
        long endTime = System.currentTimeMillis();



        if (true) {
            System.out.println("Tempo de carregamento dos parâmetros: " + (endTime - startTime) + "ms");
        }
        return null;
    }
}