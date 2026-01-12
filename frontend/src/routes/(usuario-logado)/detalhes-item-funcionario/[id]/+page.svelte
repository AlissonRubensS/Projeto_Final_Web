<script>
	import { MapPin, CalendarDays, Mail, Share2, Info, User } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	export let data;

	const { item } = data;
</script>

<div class="max-w-6xl mx-auto p-6 font-['Inter']">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

		<!-- IMAGEM + CONTATO -->
		<div class="space-y-6">
			<div class="bg-gray-50 rounded-2xl border h-[420px] flex items-center justify-center">
				<img src={item.imagem} class="max-h-full mix-blend-multiply" />
			</div>

			<div class="bg-white rounded-2xl border p-6">
				<p class="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">
					Encontrado por
				</p>

				<div class="flex gap-4 items-center">
					<div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
						<User size={28} class="text-gray-300" />
					</div>
					<div>
						<h3 class="font-bold">{item.aluno.nome}</h3>
						<p class="text-sm text-gray-500">{item.aluno.curso}</p>
						<div class="mt-2 flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold">
							<Mail size={14} /> {item.aluno.email}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- INFO -->
		<div>
			<div class="flex gap-2 mb-4">
				<span class="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
					{item.tipo}
				</span>

				{#if item.status === 'aguardando_retirada'}
					<span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
						Aguardando retirada
					</span>
				{:else}
					<span class="bg-gray-800 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
						Entregue
					</span>
				{/if}
			</div>

			<h1 class="text-4xl font-black italic mb-8">{item.nome}</h1>

			<div class="bg-white border rounded-2xl p-6 space-y-4 mb-8">
				<div class="flex gap-3 text-sm">
					<CalendarDays class="text-blue-500" />
					<div>
						<p class="font-bold">Data</p>
						<p class="text-gray-600">{item.data}</p>
					</div>
				</div>
				<div class="flex gap-3 text-sm">
					<MapPin class="text-blue-500" />
					<div>
						<p class="font-bold">Local</p>
						<p class="text-gray-600">{item.local}</p>
					</div>
				</div>
			</div>

			<p class="text-sm text-gray-500 italic mb-8">{item.descricao}</p>

			{#if item.status === 'aguardando_retirada'}
				<button
					on:click={() => goto(`/detalhes-item-funcionario/${item.id}/confirmar-retirada`)}
					class="w-full h-16 bg-[#1d76da] hover:bg-blue-700 text-white font-black uppercase rounded-xl">
					Confirmar retirada
				</button>
			{/if}

			<div class="flex gap-2 mt-4">
				<button class="flex-1 bg-gray-200 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
					<Share2 size={16} /> Compartilhar
				</button>
				<button class="bg-gray-200 px-4 rounded-xl">
					<Info size={18} />
				</button>
			</div>
		</div>
	</div>
</div>
