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
				observations: 'Mochila Dell preta contendo um estojo e um copo de café da tampa preta',
				find_date: null,
				url_photo:
					'https://imgs.search.brave.com/GQxj0VDpTMdWgtfFSXaEO3Xujd7iU-5gXjMztu5o6Os/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzMxMzQ5OS9t/b2NoaWxhX2RlbGxf/ZWNvbG9vcF9lc3Nl/bnRpYWxfcGFyYV9u/b3RlYm9va3NfYXRl/XzE2X3ByZXRhX2Nw/MzcyNF8xOTY4OF81/XzE0MTQyMGY0NzU2/Y2QwMzAwYjlhNTcy/NDUwNzA3ZTNiLmpw/Zw',
				loss_local: 'Sala 2, Unidade A',
				loss_date: '12/10/2025'
			},
			{
				name: 'Garrafa azul',
				observations: 'Garrafa Azul da marca PACCO',
				find_date: null,
				url_photo:
					'https://imgs.search.brave.com/Vth0wZQO60BBijz1Spg4Wcjx1C3WhxA21XdHthw4Brs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9xdWFs/aXR5bWFuaXB1bGFj/YW8uY29tLmJyL2Nv/bnRlbnQvaW1hZ2Vz/L3RodW1icy8wMDA0/MDU2X3BhY2NvLWdh/cnJhZmEtYXp1bC1y/b3lhbC05NTBtbC1o/eWRyYWJvdHRsZV84/MDAuanBlZz9mb3Jt/YXQ9d2VicCZxdWFs/aXR5PTcw',
				loss_local: 'Cantina',
				loss_date: '11/12/2025'
			},
			{
				name: 'Garrafa rosa',
				observations: 'Garrafa rosa da marca stanley',
				find_date: null,
				url_photo:
					'https://imgs.search.brave.com/WdBcDhZeafHgI17Ew1o5tkGt8u2N4XQwnacVlad6dgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zamRp/Z2l0YWwudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzEw/MjE5NDAtODAwLTgw/MD92PTYzODgwMjU0/NzgwMTgzMDAwMCZ3/aWR0aD04MDAmaGVp/Z2h0PTgwMCZhc3Bl/Y3Q9dHJ1ZQ',
				loss_local: 'Sala 1, Unidade B',
				loss_date: '01/12/2025'
			},
			{
				name: 'Estojo rosa',
				observations: 'Estojo rosa com um chaveiro de macaco rosa',
				find_date: null,
				url_photo:
					'https://imgs.search.brave.com/rrjJDUCZ5gUEjzVA8j78zv0sbvldoGZN1VVWbios6AI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWxp/c3NlaXJhcy52dGV4/YXNzZXRzLmNvbS9h/cnF1aXZvcy9pZHMv/NDQ2Njc1LTMwMC0z/MDA_dj02MzgwODM0/NTQ0OTM2MzAwMDAm/d2lkdGg9MzAwJmhl/aWdodD0zMDAmYXNw/ZWN0PXRydWU',
				loss_local: 'Sala 1, Unidade B',
				loss_date: '01/12/2025'
			},
			{
				name: 'Fone de ouvido Samsung',
				observations: 'Fone de ouvido sem fio Samsung Buds, com a caixa branca',
				find_date: null,
				url_photo:
					'https://imgs.search.brave.com/WqjR-eFjpP5YEg_R250LK-CYW8zMOOdAKw5UYKOruRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmV0c2hvZXMu/Y29tLmJyL3Byb2R1/dG9zL3NhbXN1bmct/Z2FsYXh5LWJ1ZHMt/ZmUtZm9uZS1kZS1v/dXZpZG8vNjYvMklE/LTE5MDItMjY2LzJJ/RC0xOTAyLTI2Nl96/b29tMS5qcGc_dHM9/MTczMDg4OTk2OSZp/bXM9NTQ0eA',
				loss_local: 'Sala 1, Unidade B',
				loss_date: '01/12/2025'
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
