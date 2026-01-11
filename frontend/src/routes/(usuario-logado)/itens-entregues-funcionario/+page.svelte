<script>
	import { onMount } from 'svelte';
	import { MoveLeft, SearchCheck, MapPin, CalendarDays, Eye, CheckCircle2 } from '@lucide/svelte';

	let itens = [];
	let loading = true;
	
	// Simulação de ID do Funcionário
	let userId = 2; 

	const API_URL = "http://localhost:3000/itens";

	async function loadItensEntregues() {
		try {
			const res = await fetch(API_URL);
			if (res.ok) {
				const data = await res.json();
				// Filtra apenas os itens que já foram entregues/devolvidos
				itens = data.filter(item => item.status === 'entregue' || item.status === 'devolvido');
			}
		} catch (err) {
			console.error("Erro ao carregar dados:", err);
		} finally {
			loading = false;
		}
	}

	onMount(loadItensEntregues);
</script>

<style>
	:global(body) { font-family: 'Inter', sans-serif; }
</style>

<div class="max-w-7xl mx-auto p-6 pb-20">
	<a href="/minha-area-funcionario" class="flex items-center gap-2 text-blue-600 font-bold uppercase text-[11px] mb-8 hover:underline tracking-wider">
		<MoveLeft size={14} strokeWidth={3} /> VOLTAR PARA O PERFIL
	</a>

	<div class="mb-10">
		<h1 class="text-4xl font-bold text-[#1e293b] uppercase tracking-tight">Lista de itens entregues</h1>
		<p class="text-gray-500 text-lg">Visualize o histórico de itens que foram devolvidos aos proprietários.</p>
	</div>

	{#if loading}
		<div class="flex justify-center p-20">
			<span class="loading loading-spinner loading-lg text-blue-600"></span>
		</div>
	{:else if itens.length > 0}
		<div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
			<div class="overflow-x-auto p-4">
				<table class="table w-full border-separate border-spacing-y-3">
					<thead>
						<tr class="text-gray-400 uppercase text-[11px] border-none tracking-widest">
							<th class="bg-transparent">Item Devolvido</th>
							<th class="bg-transparent">Data da Entrega</th>
							<th class="bg-transparent">Local de Origem</th>
							<th class="bg-transparent text-center">Status</th>
							<th class="bg-transparent text-center">Ações</th>
						</tr>
					</thead>
					<tbody>
						{#each itens as item}
							<tr class="bg-gray-50 hover:bg-gray-100 transition-all group shadow-sm">
								<td class="rounded-l-2xl border-none py-4">
									<div class="flex items-center gap-4 px-2">
										<div class="bg-green-100 p-2.5 rounded-xl text-green-600 group-hover:bg-green-200 transition-colors">
											<CheckCircle2 size={20} />
										</div>
										<span class="font-bold text-gray-700 text-base">{item.name}</span>
									</div>
								</td>
								<td class="text-gray-500 font-medium border-none">
									<div class="flex items-center gap-2">
										<CalendarDays size={16} class="text-gray-400"/> 
										{new Date(item.updated_at || item.created_at).toLocaleDateString('pt-BR')}
									</div>
								</td>
								<td class="text-gray-500 font-medium border-none">
									<div class="flex items-center gap-2">
										<MapPin size={16} class="text-blue-500/70"/> 
										{item.location || 'Não informado'}
									</div>
								</td>
								<td class="text-center border-none">
									<span class="badge badge-success border-none bg-green-100 text-green-700 font-extrabold uppercase px-4 py-3 text-[10px] tracking-tighter">
										Entregue
									</span>
								</td>
								<td class="rounded-r-2xl border-none text-center">
									<button class="btn btn-ghost btn-circle btn-sm text-blue-600 hover:bg-blue-50">
										<Eye size={18}/>
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{:else}
		<div class="mt-4 bg-white/50 rounded-[2rem] border-2 border-dashed border-gray-200 p-24 flex flex-col items-center justify-center text-center">
			<div class="bg-gray-50 p-8 rounded-full mb-6">
				<SearchCheck size={64} strokeWidth={1} class="text-gray-300" />
			</div>
			<h3 class="text-2xl font-black text-[#1e293b] uppercase tracking-tight mb-2">Está tudo vazio por aqui...</h3>
			<p class="text-gray-400 font-medium text-lg max-w-sm">
				Nenhum item entregue registrado no momento.
			</p>
		</div>
	{/if}
</div>