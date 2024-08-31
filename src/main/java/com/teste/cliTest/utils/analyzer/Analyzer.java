package com.teste.cliTest.utils.analyzer;

import com.teste.cliTest.utils.hierarchyLoader.HierarchyLoader;

import java.util.Map;

public class Analyzer {

    private Map<String, Object> hierarchy;

    public Analyzer() {
        HierarchyLoader loader = new HierarchyLoader();
        this.hierarchy = loader.loadHierarchy("dicts/hierarchy.json");
    }

    public void analyze(String phrase, int depth, boolean verbose) {

        long startTime = System.currentTimeMillis();
        long endTime = System.currentTimeMillis();

        if (verbose) {
            System.out.println("Tempo de carregamento dos parâmetros: " + (endTime - startTime) + "ms");
        }
    }
}