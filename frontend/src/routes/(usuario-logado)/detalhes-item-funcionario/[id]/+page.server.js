/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        itemPrincipal: {
            id: params.id,
            nome: 'Mochila Preta',
            data_perda: '12/10/25',
            local: 'Sala 02, Unidade A',
            descricao: 'Mochila contendo cadernos e um estojo cinza. Possui uma mancha de café na lateral direita.',
            imagem: 'https://m.media-amazon.com/images/I/61m17lX3m9L._AC_SL1000_.jpg',
            usuario: {
                nome: 'Mateus Silva',
                curso: 'Engenharia Civil',
                email: 'mateus.silva@alu.ufc.br'
            }
        },
        sugestoes: [
            { id: '101', nome: "Mochila Dell Preta", local: "Sala 02, Unidade A", data: "12/10/25", imagem: "https://m.media-amazon.com/images/I/61m17lX3m9L._AC_SL1000_.jpg", descricao: "Mochila contendo livros e um estojo..." },
            { id: '102', nome: "Mochila Rosa", local: "Sala 02, Unidade A", data: "12/10/25", imagem: "", descricao: "Mochila contendo livros e material de dese..." }
        ]
    };
}