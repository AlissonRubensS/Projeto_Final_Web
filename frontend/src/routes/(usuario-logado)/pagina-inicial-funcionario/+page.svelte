<script lang="ts">
	type Item = {
		id: number;
		name: string;
		description: string;
		status: 'Perdido' | 'Encontrado';
		local: string;
		date: string;
		image?: string | null;
	};

	const indicadores = {
		armazenados: 10,
		aguardando: 3,
		devolvidos: 15
	};

	const itensRecentes: Item[] = [
		{
			id: 1,
			name: 'Mochila Dell Preta',
			description: 'Mochila contendo cadernos e um estojo.',
			status: 'Perdido',
			local: 'Sala 02, Unidade A',
			date: '12/10/25',
			image: '/static/mochila.png'
		},
		{
			id: 2,
			name: 'Calculadora',
			description: 'Calculadora científica',
			status: 'Encontrado',
			local: 'Biblioteca',
			date: '12/10/25',
			image: '/static/calculadora.png'
		},
		{
			id: 3,
			name: 'Garrafa Rosa',
			description: 'Garrafa da marca Stanley',
			status: 'Perdido',
			local: 'Cantina',
			date: '12/10/25',
			image: '/static/garrafa.png'
		},
		{
			id: 4,
			name: 'Estojo azul',
			description: 'Estojo contendo duas canetas bic',
			status: 'Encontrado',
			local: 'Auditório 1',
			date: '12/10/25',
			image: null
		}
	];
</script>

<div class="bg-base-200 min-h-screen px-12 py-8">

	<!-- TÍTULO -->
	<h1 class="text-2xl font-bold mb-6">Página Inicial</h1>

	<!-- CARD INVENTÁRIO -->
	<div class="bg-base-100 rounded-xl p-6 flex justify-between items-center shadow-sm mb-8">
		<div class="flex items-center gap-4">
			<div class="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
				<img src="/icons/box.svg" class="w-6" />
			</div>

			<div>
				<p class="font-semibold">Acessar inventário completo</p>
				<p class="text-sm text-gray-500">
					consultar, editar ou dar baixa em itens armazenados
				</p>
			</div>
		</div>

		<a href="/usuario-logado/inventario" class="text-primary font-medium">
			ver lista →
		</a>
	</div>

	<!-- INDICADORES -->
	<div class="grid grid-cols-3 gap-6 mb-10">
		<div class="bg-base-100 rounded-xl p-6 shadow-sm">
			<p class="text-sm text-gray-500 mb-1">Itens armazenados</p>
			<p class="text-4xl font-bold text-primary">
				{indicadores.armazenados}
			</p>
		</div>

		<div class="bg-base-100 rounded-xl p-6 shadow-sm">
			<p class="text-sm text-gray-500 mb-1">Aguardando Retirada</p>
			<p class="text-4xl font-bold text-warning">
				{indicadores.aguardando}
			</p>
		</div>

		<div class="bg-base-100 rounded-xl p-6 shadow-sm">
			<p class="text-sm text-gray-500 mb-1">Itens Devolvidos (mês)</p>
			<p class="text-4xl font-bold text-success">
				{indicadores.devolvidos}
			</p>
		</div>
	</div>

	<!-- ITENS RECENTES -->
	<h2 class="font-semibold mb-4">Itens Recentes</h2>

	<div class="grid grid-cols-4 gap-6">
		{#each itensRecentes as item}
			<div class="bg-base-100 rounded-xl shadow-sm overflow-hidden">
				<div class="h-40 bg-base-200 flex items-center justify-center">
					{#if item.image}
						<img src={item.image} class="h-full object-cover" />
					{:else}
						<img src="/icons/image-off.svg" class="w-8 opacity-40" />
					{/if}
				</div>

				<div class="p-4">
					<span
						class="badge mb-2
							{item.status === 'Perdido'
								? 'badge-warning'
								: 'badge-success'}"
					>
						{item.status}
					</span>

					<p class="font-semibold">{item.name}</p>
					<p class="text-sm text-gray-500 mb-2">
						{item.description}
					</p>

					<div class="text-sm text-gray-400 space-y-1">
						<p>{item.local}</p>
						<p>{item.date}</p>
					</div>

					<button class="btn btn-sm btn-outline w-full mt-4">
						Ver detalhes
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>
