<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import Card from '../../../components/Card.svelte';

	/**
	 * @type {any[] | null | undefined}
	 */
	let items = [];
	onMount(async () => {
		// fazer um await fetch para o endpoint que retorna todos os itens e popular o array items
		items = [
			{
				name: 'Test',
				observations: 'Descricao zao zaozoaooozaoazozaoza',
				find_date: null,
				url_photo: 'url',
				loss_local: 'local perdido',
				loss_date: 'data perdida'
			},
			{
				name: 'Test',
				observations: 'Descricao zao zaozoaooozaoazozaoza',
				find_date: null,
				url_photo: 'url',
				loss_local: 'local perdido',
				loss_date: 'data perdida'
			},
			{
				name: 'Test',
				observations: 'Descricao zao zaozoaooozaoazozaoza',
				find_date: null,
				url_photo: 'url',
				loss_local: 'local perdido',
				loss_date: 'data perdida'
			}
		];
	});
</script>

<h1 class="font-bold text-3xl mb-2">Itens Perdidos</h1>
<p class="font-semibold text-gray-500">
	Confira o que foi perdido pelo campus para que você possa ajudar a encontrar.
</p>

<div class="grid grid-cols-4 gap-4 mt-4">
	{#each items as item}
		<Card {item} />
	{/each}
</div>
