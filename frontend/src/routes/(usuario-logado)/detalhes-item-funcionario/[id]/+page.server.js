/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
	const { id } = params;
	const status = cookies.get(`item-${id}-status`) ?? 'aguardando_retirada';

	return {
		item: {
			id,
			nome: 'Mochila Dell Preta',
			data: '12/10/25',
			local: 'Sala 02, Unidade A',
			descricao:
				'Mochila contendo cadernos e um estojo cinza. Possui uma mancha de café na lateral direita.',
			imagem:
				'https://m.media-amazon.com/images/I/61m17lX3m9L._AC_SL1000_.jpg',
			tipo: 'Encontrado',
			status,
			aluno: {
				nome: 'Mateus Silva',
				curso: 'Engenharia Civil',
				email: 'mateus.silva@alu.ufc.br'
			}
		}
	};
}
