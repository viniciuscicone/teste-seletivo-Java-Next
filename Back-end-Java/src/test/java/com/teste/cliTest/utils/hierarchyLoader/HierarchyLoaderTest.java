package com.teste.cliTest.utils.hierarchyLoader;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class HierarchyLoaderTest {

    @Test
    public void testLoadHierarchy() throws IOException {

        String jsonContent = "{ \"Animais\": { \"Mamíferos\": { \"Carnívoros\": { \"Felinos\": [\"Leões\", \"Tigres\"] } } } }";
        File tempFile = File.createTempFile("hierarchy", ".json");
        tempFile.deleteOnExit();
        Files.write(tempFile.toPath(), jsonContent.getBytes());

        HierarchyLoader loader = new HierarchyLoader();

        Map<String, Object> hierarchy = loader.loadHierarchy(tempFile.getAbsolutePath());

        assertNotNull(hierarchy);
        assertTrue(hierarchy.containsKey("Animais"));
    }
}