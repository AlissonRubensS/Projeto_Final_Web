<script lang="ts">
	type Item = {
		id: number;
		name: string;
		status: 'Perdido' | 'Encontrado';
		loss_local: string;
		loss_date: string;
	};

	let carregando = false;
	let erro: string | null = null;

	let itens: Item[] = [
		{
			id: 1,
			name: 'Carteira preta',
			status: 'Perdido',
			loss_local: 'Biblioteca Central',
			loss_date: '12/01/2026'
		},
		{
			id: 2,
			name: 'Garrafa térmica',
			status: 'Perdido',
			loss_local: 'Restaurante Universitário',
			loss_date: '10/01/2026'
		},
		{
			id: 3,
			name: 'Chave com chaveiro',
			status: 'Encontrado',
			loss_local: 'Bloco de Computação',
			loss_date: '08/01/2026'
		}
	];


	function marcarComoEncontrado(id: number) {
		itens = itens.map((item) =>
			item.id === id ? { ...item, status: 'Encontrado' } : item
		);
	}
</script>



<div class="bg-[#F5F9FF] min-h-screen px-10 py-8">
	<h1 class="text-2xl font-bold mb-1">Meus itens perdidos</h1>
	<p class="text-gray-500 mb-6">
		Gerencie os itens que você registrou como perdidos. Marque como encontrado caso já tenha
		recuperado o item.
	</p>

	<div class="bg-white rounded-lg shadow-sm p-6 max-w-5xl">
		<table class="table w-full">
			<thead>
				<tr class="text-gray-400 text-sm">
					<th>ITEM</th>
					<th>DATA</th>
					<th>LOCAL</th>
					<th>AÇÕES</th>
				</tr>
			</thead>

			<tbody>
				{#if carregando}
					<tr>
						<td colspan="4" class="text-center py-6 text-gray-400"> Carregando itens... </td>
					</tr>
				{:else if erro}
					<tr>
						<td colspan="4" class="text-center py-6 text-red-500">
							{erro}
						</td>
					</tr>
				{:else if itens.length === 0}
					<tr>
						<td colspan="4" class="text-center py-6 text-gray-400">
							Nenhum item perdido cadastrado.
						</td>
					</tr>
				{:else}
					{#each itens as item}
						<tr class="border-t">
							<td class="flex items-center gap-3">
								<div class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125V5.25A3.375 3.375 0 0010.125 1.875H8.25m6.621 1.5L5.25 12.996m0 0l-3 3m3-3h9.75"
										/>
									</svg>
								</div>
								<span class="font-medium">{item.name}</span>
							</td>

							<td class="text-gray-600">
								{item.loss_date}
							</td>

							<td class="text-gray-600">
								{item.loss_local}
							</td>

							<td class="flex items-center gap-3">
								{#if item.status === 'Perdido'}
									<button
										class="btn btn-outline btn-success btn-xs"
										on:click={() => marcarComoEncontrado(item.id)}
									>
										Marcar como encontrado
									</button>

									<span class="badge badge-warning badge-sm"> Perdido </span>
								{:else}
									<span class="badge badge-success badge-sm"> Encontrado </span>
								{/if}
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>
