<script>
	let item = {
		name: '',
		observations: '',
		url_photo:
			'https://imgs.search.brave.com/0p3LXegmF0j-P9M5Y8h6kQHZP6S10qpzrzBYUXCSce0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnpz/dC5jb20uYnIvdGh1/bWJzLzUxLzE5LzEw/Ly05MTczOTY4NDku/anBn',
		find_date: null,
		find_local: null,
		loss_date: '',
		loss_local: '',
		fk_Users_id: 1
	};

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function onSubmit(event) {
		event.preventDefault();
		const res = await fetch('https://projeto-final-web-uy9e.onrender.com/itens', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		});
		console.log(res);
	}
</script>

<h1 class="font-bold text-3xl mb-2">Registrar Item Perdido</h1>
<p class="font-semibold text-gray-500">
	Preencha o formulário abaixo com o máximo de detalhes possível para que possamos ajudar a
	encontrar o seu pertence.
</p>

<div class="card w-full bg-base-100 card-md shadow-sm my-5">
	<form class="card-body" on:submit|preventDefault={onSubmit}>
		<div class="flex gap-8">
			<fieldset class="fieldset flex-1">
				<legend class="fieldset-legend font-medium"
					>Nome do objeto <span class="text-red-600">*</span></legend
				>
				<input
					type="text"
					bind:value={item.name}
					class="input w-full bg-[#F7FCFF]"
					placeholder="Ex: Caderno azul, caderno de cálculo..."
				/>
			</fieldset>

			<fieldset class="fieldset flex-1">
				<legend class="fieldset-legend font-medium"
					>Data da perda <span class="text-red-600">*</span></legend
				>
				<input type="date" bind:value={item.loss_date} class="input w-full bg-[#F7FCFF]" />
			</fieldset>
		</div>
		<fieldset class="fieldset flex-1">
			<legend class="fieldset-legend font-medium"
				>Local provável da perda <span class="text-red-600">*</span></legend
			>
			<input
				type="text"
				bind:value={item.loss_local}
				class="input w-full bg-[#F7FCFF]"
				placeholder="Indique o nome do local no campus em que você viu o objeto pela última vez."
			/>
		</fieldset>

		<fieldset class="fieldset flex-1">
			<legend class="fieldset-legend font-medium"
				>Descrição detalhada do objeto <span class="text-red-600">*</span></legend
			>
			<textarea
				class="textarea w-full h-30 bg-[#F7FCFF]"
				bind:value={item.observations}
				placeholder="Descreva a cor, marca, marcas de uso, conteúdo ou qualquer detalhe que ajude na identificação..."
			></textarea>
		</fieldset>

		<fieldset class="fieldset flex-1">
			<legend class="fieldset-legend">Foto para referência (Opcional)</legend>
			<input type="file" class="file-input w-full" />
			<label class="label">JPEG (Max size 5MB)</label>
		</fieldset>

		<div class="grid grid-cols-2 gap-8">
			<a class="btn" href="/registrar-item">Cancelar</a>
			<button type="submit" class="btn btn-primary">Registrar perda</button>
		</div>
	</form>
</div>
