<script>
	import { CheckCircle2, AlertCircle, ArrowLeft } from 'svelte';
	export let data;
	export let form;

	const { item } = data;
</script>

<div class="max-w-3xl mx-auto p-10 font-['Inter'] space-y-8">
	<button
		on:click={() => history.back()}
		class="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase"
	>
		<ArrowLeft size={16} /> Voltar
	</button>

	<h1 class="text-5xl font-black italic">Confirmar retirada</h1>

	<div class="bg-white rounded-[2.5rem] border p-8 flex gap-8 items-center">
		<img src={item.imagem} class="w-32 rounded-3xl mix-blend-multiply" />
		<p class="text-gray-500 italic text-sm">
			Verifique o documento oficial com foto antes de entregar o item.
		</p>
	</div>

	<form method="POST" class="bg-white rounded-[2.5rem] p-10 border space-y-8">
		{#if form?.error}
			<div
				class="bg-red-50 border border-red-200 p-4 rounded-xl flex gap-2 text-red-600 text-xs font-black"
			>
				<AlertCircle size={18} />
				{form.error}
			</div>
		{/if}

		<label class="flex gap-4 items-center">
			<input type="checkbox" name="verificado" required class="w-6 h-6" />
			<span class="font-black text-xs italic">
				Confirmo que verifiquei a identidade do portador.
			</span>
		</label>

		<button
			type="submit"
			class="w-full h-20 bg-[#1d76da] hover:bg-blue-700 text-white rounded-[1.5rem] font-black uppercase flex items-center justify-center gap-4"
		>
			<CheckCircle2 size={24} /> Finalizar entrega
		</button>
	</form>
</div>
