import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		item: {
			id: params.id,
			nome: 'Mochila Dell Preta',
			imagem:
				'https://m.media-amazon.com/images/I/61m17lX3m9L._AC_SL1000_.jpg'
		}
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, params, cookies }) => {
		const form = await request.formData();

		if (!form.get('verificado')) {
			return fail(400, { error: 'Confirmação obrigatória.' });
		}

		cookies.set(`item-${params.id}-status`, 'entregue', {
			path: '/',
			httpOnly: true
		});

		throw redirect(303, `/detalhes-item-funcionario/${params.id}`);
	}
};
