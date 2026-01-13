<script>
	import { MapPin, CalendarDays, Mail, Share2, User, ImageIcon, ArrowRight } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	const { itemPrincipal, sugestoes } = data;
	
	let itemSelecionadoId = null; 

	// Pega o ID da rota atual para compor o link
	$: itemId = $page.params.id;

	function selecionarItem(id) {
		itemSelecionadoId = itemSelecionadoId === id ? null : id;
	}

	function confirmarAssociacao() {
		if (itemSelecionadoId) {
			goto(`/detalhes-item-funcionario/${itemId}/confirmar-retirada`);
		}
	}
</script>

<div class="max-w-6xl mx-auto p-6 font-['Inter'] text-gray-800">
	<div class="grid grid-cols-12 gap-8 mb-16">
		<div class="col-span-12 lg:col-span-6 space-y-6">
			<div class="bg-[#f3f4f6] rounded-2xl border border-gray-100 flex items-center justify-center h-[420px] overflow-hidden shadow-sm">
				<img src={itemPrincipal.imagem} alt="" class="max-h-full object-contain mix-blend-multiply" />
			</div>

			<div class="bg-white rounded-2xl border p-6 shadow-sm">
				<p class="text-[10px] font-bold uppercase text-gray-400 mb-4 tracking-widest">Entrar em contato com</p>
				<div class="flex items-center gap-4">
					<div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
						<User size={28} />
					</div>
					<div>
						<h3 class="font-bold text-lg">{itemPrincipal.usuario.nome}</h3>
						<p class="text-sm text-gray-500">Aluno - {itemPrincipal.usuario.curso}</p>
						<div class="mt-2 inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-[11px] font-bold text-gray-600">
							<Mail size={14} /> {itemPrincipal.usuario.email}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-span-12 lg:col-span-6">
			<div class="flex gap-2 mb-4">
				<span class="bg-[#dcfce7] text-[#16a34a] px-3 py-1 rounded-lg text-[10px] font-bold uppercase">Encontrado</span>
				<span class="bg-[#eff6ff] text-[#2563eb] border border-[#dbeafe] px-3 py-1 rounded-lg text-[10px] font-bold uppercase italic tracking-tight">Aguardando associação</span>
			</div>

			<h1 class="text-4xl font-black mb-8 italic tracking-tight">{itemPrincipal.nome}</h1>

			<div class="bg-white border rounded-2xl p-6 mb-8 space-y-5 shadow-sm">
				<p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Informações do Registro</p>
				<div class="flex items-start gap-4 text-sm">
					<CalendarDays size={20} class="text-blue-500 shrink-0" />
					<div><p class="font-bold">Data da perda</p><p class="text-gray-500 mt-1">{itemPrincipal.data_perda}</p></div>
				</div>
				<div class="flex items-start gap-4 text-sm">
					<MapPin size={20} class="text-blue-500 shrink-0" />
					<div><p class="font-bold leading-tight">Local em que foi visto pela última vez</p><p class="text-gray-500 mt-1">{itemPrincipal.local}</p></div>
				</div>
			</div>

			<div class="mb-10">
				<p class="text-sm font-bold mb-3 uppercase text-[11px] text-gray-400 tracking-wider">Descrição:</p>
				<p class="text-gray-500 text-sm leading-relaxed italic">{itemPrincipal.descricao}</p>
			</div>

			<div class="space-y-3">
				<button 
					on:click={confirmarAssociacao}
					disabled={!itemSelecionadoId}
					class="w-full h-14 rounded-xl font-bold uppercase text-sm tracking-widest transition-all shadow-md
					{itemSelecionadoId ? 'bg-[#1d76da] text-white hover:bg-blue-700 cursor-pointer' : 'bg-[#94a3b8] text-white cursor-not-allowed'}">
					confirmar associação
				</button>
				
				<button class="w-full h-14 bg-[#e2e8f0] hover:bg-gray-300 text-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
					<Share2 size={18} /> Compartilhar
				</button>
			</div>
		</div>
	</div>

	<div class="mt-12 pt-10 border-t border-gray-100">
		<h2 class="text-2xl font-black mb-8 italic uppercase tracking-tighter">Sugestões de compatibilidade</h2>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each sugestoes as sug}
				<div class="bg-white border-2 {itemSelecionadoId === sug.id ? 'border-blue-500 ring-2 ring-blue-50' : 'border-gray-100'} rounded-2xl p-4 flex gap-4 shadow-sm transition-all">
					<div class="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border relative overflow-hidden">
						{#if sug.imagem}
							<img src={sug.imagem} alt="" class="max-h-full mix-blend-multiply" />
						{:else}
							<ImageIcon size={28} class="text-gray-200" />
						{/if}
						<span class="absolute top-1 left-1 bg-[#fef9c3] text-[#a16207] px-2 py-0.5 rounded text-[8px] font-bold uppercase border border-[#fef08a]">Perdido</span>
					</div>
					
					<div class="flex-1 flex flex-col justify-between">
						<div>
							<h4 class="font-bold text-[13px] uppercase truncate">{sug.nome}</h4>
							<p class="text-[10px] text-gray-400 mt-1 italic line-clamp-1">{sug.descricao}</p>
						</div>

						<button 
							on:click={() => selecionarItem(sug.id)}
							class="w-full mt-3 py-2 rounded-lg text-[10px] font-black uppercase transition-all
							{itemSelecionadoId === sug.id ? 'bg-[#1d76da] text-white' : 'bg-[#e2e8f0] text-gray-600 hover:bg-gray-300'}">
							{itemSelecionadoId === sug.id ? 'item selecionado' : 'selecionar item'}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>