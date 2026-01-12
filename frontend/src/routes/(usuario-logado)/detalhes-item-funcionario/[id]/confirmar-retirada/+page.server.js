import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        item: {
            id: params.id,
            nome: 'Mochila Dell Preta',
            data_perda: '12/10/25',
            local: 'Sala 02, Unidade A',
            descricao: 'Mochila contendo cadernos e um estojo cinza. Possui uma mancha de café na lateral direita.',
            imagem: 'https://m.media-amazon.com/images/I/61m17lX3m9L._AC_SL1000_.jpg',
            // Dados para os cards de contato conforme o protótipo
            encontrado_por: {
                nome: 'Mateus Silva',
                curso: 'Engenharia Civil',
                email: 'mateus.silva@alu.ufc.br'
            },
            perdido_por: {
                nome: 'Alice Rodrigues',
                curso: 'Engenharia de Software',
                email: 'alice.rodrigues@alu.ufc.br'
            }
        }
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, params }) => {
        const form = await request.formData();
        const verificado = form.get('verificado');

        if (!verificado) {
            return fail(400, { error: 'Confirmação obrigatória.' });
        }

        // Lógica de banco de dados viria aqui
        
        throw redirect(303, `/detalhes-item-funcionario/${params.id}`);
    }
};