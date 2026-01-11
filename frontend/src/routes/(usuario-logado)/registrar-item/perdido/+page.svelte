<h1 class="font-bold text-3xl mb-2">Registrar Item Perdido</h1>
<p class="font-semibold text-gray-500">
	Preencha o formulário abaixo com o máximo de detalhes possível para que possamos ajudar a
	encontrar o seu pertence.
</p>

<div class="card w-full bg-base-100 card-md shadow-sm my-5">
	<div class="card-body">
		<div class="flex gap-8">
			<fieldset class="fieldset flex-1">
				<legend class="fieldset-legend font-medium"
					>Nome do objeto <span class="text-red-600">*</span></legend
				>
				<input
					type="text"
					class="input w-full bg-[#F7FCFF]"
					placeholder="Ex: Caderno azul, caderno de cálculo..."
				/>
			</fieldset>

			<fieldset class="fieldset flex-1">
				<legend class="fieldset-legend font-medium"
					>Data da perda <span class="text-red-600">*</span></legend
				>
				<input type="date" class="input w-full bg-[#F7FCFF]" />
			</fieldset>
		</div>
		<fieldset class="fieldset flex-1">
			<legend class="fieldset-legend font-medium"
				>Local provável da perda <span class="text-red-600">*</span></legend
			>
			<input
				type="text"
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
			<button class="btn btn-primary">Registrar perda</button>
		</div>
	</div>
</div>
