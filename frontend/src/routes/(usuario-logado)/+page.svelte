<script lang="ts">
	import { onMount } from 'svelte';

	let itensRecentes: any[] = [];
	let carregando = true;
	let erro: string | null = null;

	onMount(async () => {
		await carregarItensRecentes();
	});

	async function carregarItensRecentes() {
		carregando = true;
		erro = null;

		try {
			itensRecentes = [
				{
					id: 1,
					name: 'Carteira preta',
					status: 'Perdido',
					observations: 'Carteira de couro com documentos',
					loss_local: 'Biblioteca',
					loss_date: '12/01/2026',
					url_photo: '/carteirapreta.jpg'
				},
				{
					id: 2,
					name: 'Chave com chaveiro',
					status: 'Encontrado',
					observations: 'Chaves',
					loss_local: 'Unidade 1',
					loss_date: '10/01/2026',
					url_photo: '/chave.jpg'
				},
				{
					id: 3,
					name: 'Garrafa térmica',
					status: 'Perdido',
					observations: 'Garrafa inox, marca Stanley',
					loss_local: 'Restaurante Universitário',
					loss_date: '09/01/2026',
					url_photo: '/garrafa.jpg'
				},
				{
					id: 4,
					name: 'Fone de ouvido',
					status: 'Encontrado',
					observations: 'Fone bluetooth preto',
					loss_local: 'Auditório 1',
					loss_date: '08/01/2026',
					url_photo: null
				}
			];
		} catch (e) {
			erro = 'Erro ao carregar itens recentes.';
		} finally {
			carregando = false;
		}
	}
	import { goto } from '$app/navigation';
	import { SearchX } from '@lucide/svelte';
</script>

<div class="bg-[#F5F9FF] min-h-screen px-10 py-6">
	<h1 class="text-3xl font-bold mb-6">Página Inicial</h1>

	<div class="card bg-white shadow-sm mb-10">
		<div class="card-body flex flex-row justify-between items-center">
			<div class="flex items-center gap-4">
				<div class="bg-yellow-100 p-3 rounded-lg">
					<SearchX class="text-yellow-600" size={24} />
				</div>

				<div>
					<h2 class="font-semibold text-lg">Meus itens perdidos</h2>
					<p class="text-sm text-gray-500">Verifique os itens que você registrou como perdidos.</p>
				</div>
			</div>

			<a href="/meus-itens-perdidos" class="text-primary font-medium"> Acessar </a>
		</div>
	</div>

	<h2 class="text-xl font-semibold mb-4">Itens Recentes</h2>

	{#if carregando}
		<p class="text-gray-400">Carregando itens recentes...</p>
	{:else if erro}
		<p class="text-red-500">{erro}</p>
	{:else if itensRecentes.length === 0}
		<p class="text-gray-400">Nenhum item encontrado.</p>
	{:else}
		<div class="grid grid-cols-4 gap-6">
			{#each itensRecentes as item}
				<div class="card bg-white shadow-sm">
					<figure class="h-40 bg-gray-100 flex items-center justify-center">
						{#if item.url_photo}
							<img src={item.url_photo} alt={item.name} class="h-full object-cover" />
						{:else}
							<span class="text-gray-400 text-sm"> Sem imagem </span>
						{/if}
					</figure>

					<div class="card-body p-4">
						<span
							class="badge mb-2
									{item.status === 'Perdido' ? 'badge-warning' : 'badge-success'}"
						>
							{item.status}
						</span>

						<h3 class="font-semibold">{item.name}</h3>
						<p class="text-sm text-gray-500">
							{item.observations}
						</p>

						<div class="text-sm text-gray-400 mt-2">
							<p>{item.loss_local}</p>
							<p>{item.loss_date}</p>
						</div>

						<div class="card-actions mt-4">
							<a href={`/itens/${item.id}`} class="btn btn-sm btn-outline w-full"> Ver detalhes </a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
