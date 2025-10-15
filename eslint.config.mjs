import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    
    { 
        files: ["**/*.{js,mjs,cjs}"], 
        plugins: { js }, 
        extends: ["js/recommended"], 
        languageOptions: { 
            globals: { ...globals.browser, ...globals.node } 
        } 
    },
    // NUEVA CONFIGURACIÓN PARA ARCHIVOS DE PRUEBA DE JEST
    {
        files: ["**/*.test.js"], 
        languageOptions: {
            globals: globals.jest 
        }
    }
]);