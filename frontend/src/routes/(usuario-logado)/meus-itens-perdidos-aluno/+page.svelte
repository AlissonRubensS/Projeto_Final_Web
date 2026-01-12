<script>
	import { onMount } from 'svelte';
	import { MoveLeft, SearchX, MapPin, CalendarDays, Pencil, Trash2 } from '@lucide/svelte';

	let itens = [];
	let loading = true;
	
	// Simulação do ID do usuário logado (deve vir do seu sistema de login)
	let userId = 1; 

	const API_URL = "http://localhost:3000/itens";

	async function loadMeusItens() {
		try {
			// Faz a chamada ao banco buscando os itens
			const res = await fetch(API_URL);
			if (res.ok) {
				const data = await res.json();
				// Filtra para mostrar apenas itens do usuário logado e que estão como "Perdido"
				itens = data.filter(item => item.user_id === userId && item.type === 'perdido');
			}
		} catch (err) {
			console.error("Erro ao conectar com o banco:", err);
		} finally {
			loading = false;
		}
	}

	async function deletarItem(id) {
		if (confirm("Deseja realmente excluir este relato de item perdido?")) {
			try {
				const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
				if (res.ok) {
					itens = itens.filter(i => i.id !== id);
					alert("Item removido com sucesso!");
				}
			} catch (err) {
				alert("Erro ao deletar item.");
			}
		}
	}

	onMount(loadMeusItens);
</script>

<div class="max-w-5xl mx-auto p-4 pb-20">
	<a href="/minha-area-aluno" class="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs mb-8 hover:underline">
		<MoveLeft size={16} /> Voltar para o Perfil
	</a>

	<div class="mb-8">
		<h1 class="text-3xl font-bold text-gray-800 uppercase">Meus itens perdidos</h1>
		<p class="text-gray-500">Gerencie os itens que você relatou ter perdido no campus.</p>
	</div>

	{#if loading}
		<div class="flex justify-center p-20">
			<span class="loading loading-spinner loading-lg text-blue-600"></span>
		</div>
	{:else if itens.length > 0}
		<div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
			<div class="overflow-x-auto">
				<table class="table w-full border-separate border-spacing-y-2 p-4">
					<thead>
						<tr class="text-gray-400 uppercase text-xs border-none">
							<th>Item</th>
							<th>Data Relatada</th>
							<th>Local Provável</th>
							<th class="text-center">Ações</th>
						</tr>
					</thead>
					<tbody>
						{#each itens as item}
							<tr class="bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm">
								<td class="rounded-l-lg border-none">
									<div class="flex items-center gap-3">
										<div class="bg-yellow-100 p-2 rounded text-yellow-600">
											<SearchX size={18} />
										</div>
										<span class="font-bold text-gray-700">{item.name}</span>
									</div>
								</td>
								<td class="text-gray-600 text-sm border-none">
									<div class="flex items-center gap-1"><CalendarDays size={14}/> {new Date(item.created_at).toLocaleDateString('pt-BR')}</div>
								</td>
								<td class="text-gray-600 text-sm border-none">
									<div class="flex items-center gap-1"><MapPin size={14} class="text-blue-500"/> {item.location || 'Não informado'}</div>
								</td>
								<td class="rounded-r-lg border-none">
									<div class="flex justify-center gap-2">
										<button class="btn btn-ghost btn-xs text-blue-600 hover:bg-blue-50" title="Editar">
											<Pencil size={16}/>
										</button>
										<button on:click={() => deletarItem(item.id)} class="btn btn-ghost btn-xs text-red-500 hover:bg-red-50" title="Excluir">
											<Trash2 size={16}/>
										</button>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{:else}
		<div class="bg-white rounded-2xl border border-dashed border-gray-300 p-20 flex flex-col items-center justify-center text-center">
			<div class="bg-gray-50 p-6 rounded-full mb-4">
				<SearchX size={48} class="text-gray-300" />
			</div>
			<h3 class="text-xl font-bold text-gray-800 uppercase">Está tudo vazio por aqui...</h3>
			<p class="text-gray-500 max-w-xs">Você ainda não possui nenhum item perdido cadastrado.</p>
			<a href="/registrar-item/perdido" class="btn btn-primary mt-6 bg-blue-600 border-none text-white px-8">Registrar Perda</a>
		</div>
	{/if}
</div>