/** @jest-environment jsdom */

const { renderPokemon } = require('./utils.js'); 

describe('renderPokemon', () => {
   
    beforeEach(() => {
        
        document.body.innerHTML = `
            <table border="1" id="resultTable">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
    });

    test('should render a pokemon with its name, image, and types', () => {
        // Datos de prueba
        const pokemon = {
            name: "pikachu",
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            },
            types: [{ type: { name: "electric" } }]
        };

       
        renderPokemon(pokemon);

        // Verificar 
        const tbody = document.querySelector("#resultTable tbody");

     
        expect(tbody.children.length).toBe(1);

        const row = tbody.children[0];

        // nombre
        const nameCell = row.children[0];
        expect(nameCell.textContent).toBe("pikachu");

        //imagen
        const imgCell = row.children[1];
        const img = imgCell.querySelector('img');
        expect(img).not.toBeNull();
        expect(img.src).toBe(pokemon.sprites.front_default);

        // tipo
        const typeCell = row.children[2];
        expect(typeCell.textContent).toBe("electric");
    });
});