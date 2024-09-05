package com.teste.cliTest.utils.hierarchyLoader;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.Map;

public class HierarchyLoader {
    // Método para carregar a hierarquia de um arquivo JSON
    public Map<String, Object> loadHierarchy(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        try {
        // Lê o arquivo JSON e converte para um mapa
            return mapper.readValue(new File(filePath), Map.class);
        } catch (IOException e) {
            // Exibe a mensagem de erro caso ocorra uma exceção
            System.out.printf(e.getMessage());
            return null;
        }
    }
}