<script>
	import { MapPin, CalendarDays, Mail, Share2, User } from 'lucide-svelte';
	export let data;
	$: item = data.item;

	let verificado = false;
</script>

<div class="max-w-6xl mx-auto p-6 font-['Inter'] text-gray-800">
	<div class="grid grid-cols-12 gap-8">
		
		<div class="col-span-12 lg:col-span-6 space-y-6">
			<div class="bg-gray-50 rounded-2xl border flex items-center justify-center h-[400px] overflow-hidden shadow-sm">
				<img src={item.imagem} alt="" class="max-h-full object-contain mix-blend-multiply" />
			</div>

			<div class="bg-white rounded-xl border p-5 shadow-sm">
				<p class="text-[10px] font-bold uppercase text-gray-400 mb-4 tracking-wider">Encontrado por:</p>
				<div class="flex items-center gap-4">
					<div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
						<User size={24} />
					</div>
					<div>
						<h3 class="font-bold text-base">{item.encontrado_por.nome}</h3>
						<p class="text-xs text-gray-500">Aluno - {item.encontrado_por.curso}</p>
						<div class="mt-2 inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded text-[10px] font-bold text-gray-600">
							<Mail size={12} /> {item.encontrado_por.email}
						</div>
					</div>
				</div>
			</div>

			<div class="bg-white rounded-xl border p-5 shadow-sm">
				<p class="text-[10px] font-bold uppercase text-gray-400 mb-4 tracking-wider">perdida por:</p>
				<div class="flex items-center gap-4">
					<div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
						<User size={24} />
					</div>
					<div>
						<h3 class="font-bold text-base">{item.perdido_por.nome}</h3>
						<p class="text-xs text-gray-500">Aluna - {item.perdido_por.curso}</p>
						<div class="mt-2 inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded text-[10px] font-bold text-gray-600">
							<Mail size={12} /> {item.perdido_por.email}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-span-12 lg:col-span-6">
			<div class="flex gap-2 mb-4">
				<span class="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">Encontrado</span>
				<span class="bg-orange-50 text-orange-400 border border-orange-100 px-3 py-1 rounded-lg text-[10px] font-bold uppercase italic tracking-tight">Aguardando retirada</span>
			</div>

			<h1 class="text-4xl font-black mb-8 italic tracking-tighter">{item.nome}</h1>

			<div class="bg-white border rounded-2xl p-6 mb-8 space-y-5 shadow-sm">
				<p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Informações do Registro</p>
				<div class="flex items-start gap-4 text-sm">
					<CalendarDays size={20} class="text-blue-500" />
					<div><p class="font-bold leading-none">Data da perda</p><p class="text-gray-500 mt-1">{item.data_perda}</p></div>
				</div>
				<div class="flex items-start gap-4 text-sm">
					<MapPin size={20} class="text-blue-500" />
					<div><p class="font-bold leading-tight">Local em que foi visto pela última vez</p><p class="text-gray-500 mt-1">{item.local}</p></div>
				</div>
			</div>

			<div class="mb-10 text-sm leading-relaxed italic text-gray-500">{item.descricao}</div>

			<div class="space-y-3 mb-8">
				<button 
					disabled={!verificado}
					class="w-full h-14 {verificado ? 'bg-[#94a3b8]' : 'bg-gray-300'} text-white font-bold rounded-xl uppercase text-sm tracking-widest transition-all">
					confirmar retirada do item
				</button>
				<button class="w-full h-14 bg-[#e2e8f0] text-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
					<Share2 size={18} /> Compartilhar
				</button>
			</div>

			<div class="bg-white border rounded-xl p-6 shadow-sm">
				<p class="text-[10px] font-bold text-gray-400 uppercase mb-5 tracking-widest">retirada mediante a:</p>
				<label class="flex items-start gap-4 cursor-pointer">
					<input type="checkbox" bind:checked={verificado} class="w-8 h-8 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500 bg-gray-100 mt-0.5" />
					<div>
						<p class="font-bold text-base leading-tight">confirmação de identidade</p>
						<p class="text-[11px] text-gray-400 mt-1.5 italic font-medium leading-tight">
							Certifico que verifiquei o documento do aluno e que corresponde à pessoa presente
						</p>
					</div>
				</label>
			</div>
		</div>
	</div>
</div>