package com.teste.cliTest.utils.hierarchyLoader;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.Map;

public class HierarchyLoader {
    public Map<String, Object> loadHierarchy(String filePath) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Object json = mapper.readValue(new File(filePath), Object.class);

        try {
            System.out.println(mapper.writerWithDefaultPrettyPrinter()
                    .writeValueAsString(json));
            return mapper.readValue(new File(filePath), Map.class);
        } catch (IOException e) {
            e.getMessage();
            return null;
        }
    }
}