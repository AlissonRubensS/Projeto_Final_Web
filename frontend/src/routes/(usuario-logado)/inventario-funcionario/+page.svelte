<script>
	import { onMount } from 'svelte';
	import { MapPin, CalendarDays, Search, Image as ImageIcon } from '@lucide-svelte';
	import { goto } from '$app/navigation';

	let searchTerm = '';

	// EXEMPLO
	let itens = [
		{
			id: 1,
			name: 'Mochila',
			description: 'Situação teste 1: Apenas Perdido.',
			location: 'Sala 02, Unidade A',
			created_at: '2025-10-12',
			type: 'perdido',
			status: 'perdido',
			image_url: 'https://m.media-amazon.com/images/I/61m17lX3m9L._AC_SL1000_.jpg'
		},
		{
			id: 2,
			name: 'Teste 2',
			description: 'Situação teste 2: Perdido esperando associação.',
			location: 'Auditório 1',
			created_at: '2025-10-12',
			type: 'perdido',
			status: 'aguardando_associacao',
			image_url: ''
		},
		{
			id: 3,
			name: 'aaaaaaaaaa',
			description: 'Situação teste 3: Apenas Encontrado.',
			location: 'Biblioteca',
			created_at: '2025-10-12',
			type: 'encontrado',
			status: 'encontrado',
			image_url: ''
		},
		{
			id: 4,
			name: 'AAAAAAAAAAAAA',
			description: 'Situação teste 4: Encontrado esperando retirada.',
			location: 'Cantina',
			created_at: '2025-10-12',
			type: 'encontrado',
			status: 'aguardando_retirada',
			image_url: 'https://m.media-amazon.com/images/I/51S7u0Y8S0L._AC_SL1500_.jpg'
		}
	];

	$: filteredItens = itens.filter(
		(item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.location.toLowerCase().includes(searchTerm.toLowerCase())
	);

	function verDetalhes(id) {
		goto(`/detalhes-item-funcionario/${id}`);
	}
</script>

<div class="max-w-7xl mx-auto p-8 pb-20 font-['Inter']">
	<div class="mb-12">
		<h1 class="text-4xl font-bold text-gray-900 mb-2 tracking-tighter">Todos os itens</h1>
		<p class="text-gray-500 text-lg mb-8 font-medium">
			Confira o que foi perdido e achado pelo campus.
		</p>

		<div
			class="flex flex-wrap gap-4 items-end bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
		>
			<div class="flex flex-col w-full md:max-w-[160px]">
				<label class="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1 pl-1"
					>Data inicial</label
				>
				<input
					type="date"
					class="input input-bordered input-sm h-10 w-full bg-gray-50 font-bold text-gray-600 rounded-lg focus:outline-none"
				/>
			</div>
			<div class="flex flex-col w-full md:max-w-[160px]">
				<label class="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1 pl-1"
					>Data final</label
				>
				<input
					type="date"
					class="input input-bordered input-sm h-10 w-full bg-gray-50 font-bold text-gray-600 rounded-lg focus:outline-none"
				/>
			</div>

			<div class="relative flex-1 min-w-[250px]">
				<Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
				<input
					type="text"
					placeholder="BUSCAR ITENS POR NOME OU LOCAL..."
					bind:value={searchTerm}
					class="input input-bordered h-10 w-full pl-10 bg-gray-50 font-bold text-sm uppercase placeholder:normal-case placeholder:font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
				/>
			</div>
		</div>
	</div>

	{#if filteredItens.length > 0}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each filteredItens as item}
				<div
					class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
				>
					<div
						class="relative h-56 bg-[#f1f5f9] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors"
					>
						{#if item.image_url}
							<img
								src={item.image_url}
								alt={item.name}
								class="object-cover h-full w-full mix-blend-multiply group-hover:mix-blend-normal transition-all"
							/>
						{:else}
							<ImageIcon size={48} strokeWidth={1.5} class="text-gray-300" />
						{/if}

						<div class="absolute top-3 left-3">
							<span
								class="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm
								{item.type === 'encontrado'
									? 'bg-[#dcfce7] text-[#166534] border border-[#bbf7d0]'
									: 'bg-[#fef9c3] text-[#854d0e] border border-[#fef08a]'}"
							>
								{item.type}
							</span>
						</div>

						{#if item.type === 'perdido' && item.status === 'aguardando_associacao'}
							<div
								class="absolute bottom-0 left-0 w-full bg-[#dbeafe] border-t border-[#bfdbfe] py-1.5 shadow-sm"
							>
								<span
									class="block text-center text-[#1e40af] text-[10px] font-black uppercase tracking-tight"
								>
									Aguardando associação
								</span>
							</div>
						{:else if item.type === 'encontrado' && item.status === 'aguardando_retirada'}
							<div
								class="absolute bottom-0 left-0 w-full bg-[#ffedd5] border-t border-[#fed7aa] py-1.5 shadow-sm"
							>
								<span
									class="block text-center text-[#9a3412] text-[10px] font-black uppercase tracking-tight"
								>
									Aguardando retirada
								</span>
							</div>
						{/if}
					</div>

					<div class="p-5 flex flex-col flex-1">
						<h3
							class="text-lg font-black text-gray-800 mb-1 leading-tight uppercase tracking-tight"
						>
							{item.name}
						</h3>
						<p class="text-gray-500 text-xs line-clamp-2 mb-4 font-medium">{item.description}</p>

						<div class="space-y-2 mb-5 border-t border-gray-50 pt-3">
							<div
								class="flex items-center gap-2 text-[#2563eb] text-[11px] font-black uppercase tracking-wide"
							>
								<MapPin size={14} />
								<span>{item.location}</span>
							</div>
							<div class="flex items-center gap-2 text-gray-400 text-[11px] font-bold">
								<CalendarDays size={14} />
								<span>{item.created_at.split('-').reverse().join('/')}</span>
							</div>
						</div>

						<button
							on:click={() => verDetalhes(item.id)}
							class="w-full bg-[#e2e8f0] hover:bg-gray-800 hover:text-white text-gray-700 font-black uppercase text-[11px] py-3 rounded-xl transition-colors tracking-wide"
						>
							Ver detalhes
						</button>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div
			class="mt-8 bg-white rounded-3xl border-2 border-dashed border-gray-200 p-20 flex flex-col items-center justify-center text-center"
		>
			<div class="bg-gray-50 p-4 rounded-full mb-4">
				<Search size={40} class="text-gray-300" />
			</div>
			<h3 class="text-xl font-black text-gray-800 uppercase tracking-tight mb-1">
				Nenhum item encontrado
			</h3>
			<p class="text-gray-400 font-medium text-sm">
				Não encontramos nada com o termo "{searchTerm}".
			</p>
		</div>
	{/if}
</div>

<style>
	/* Força a fonte Inter e o fundo cinza claro */
	:global(body) {
		font-family: 'Inter', sans-serif;
		background-color: #f8fafc;
	}
	/* Importa a fonte caso não esteja instalada no sistema */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
</style>
