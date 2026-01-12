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
				name: 'Mochila Dell Preta',
				observations: 'Mochila Dell preta contendo um estojo e um copo de café',
				find_date: '11/01/2026',
				url_photo:
					'https://imgs.search.brave.com/GQxj0VDpTMdWgtfFSXaEO3Xujd7iU-5gXjMztu5o6Os/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzMxMzQ5OS9t/b2NoaWxhX2RlbGxf/ZWNvbG9vcF9lc3Nl/bnRpYWxfcGFyYV9u/b3RlYm9va3NfYXRl/XzE2X3ByZXRhX2Nw/MzcyNF8xOTY4OF81/XzE0MTQyMGY0NzU2/Y2QwMzAwYjlhNTcy/NDUwNzA3ZTNiLmpw/Zw',
				find_local: 'Biblioteca'
			},
			{
				name: 'Tablet Samsung',
				observations: 'Tablet s6 Lite preto',
				find_date: '12/12/2025',
				url_photo:
					'https://imgs.search.brave.com/zE6-O_sm4fSqhK2OxiscoixtcIYskzj-y2LNcI_OTKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF82/ODY4MzktTUxVNzU1/Nzc0NDI1NjVfMDQy/MDI0LU8ud2VicA',
				find_local: 'Auditório 1'
			},
			{
				name: 'Colar com pingente de rosa',
				observations: 'Colar de prata com um pingente vermelho em formato de rosa',
				find_date: '11/01/2026',
				url_photo:
					'https://imgs.search.brave.com/YZ1SjLQxhbj0Pd5D19P6s61NQ7GMYKNHOnjLmt8DrdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ',
				find_local: 'Sala 5, Unidade A'
			}
		];
	});
</script>

<h1 class="font-bold text-3xl mb-2">Itens Encontrados</h1>
<p class="font-semibold text-gray-500">Confira se algum dos itens a seguir pertence a você.</p>

<div class="grid grid-cols-4 gap-4 mt-4">
	{#each items as item}
		<Card {item} />
	{/each}
</div>
