<script>
	import { SearchX, MoveRight, SearchCheck } from '@lucide/svelte';
</script>

<h1 class="font-bold text-3xl mb-8">Que tipo de item você deseja registrar?</h1>

<a class="card w-full bg-base-100 card-md shadow-sm" href="/registrar-item/perdido">
	<div class="card-body">
		<div class="flex justify-between">
			<div>
				<div class=" bg-red-200 w-10 h-10 rounded-md btn btn-square btn-ghost cursor-default">
					<SearchX class="text-red-600 w-8" />
				</div>
				<h2 class="card-title font-semibold mt-4">Registrar item perdido</h2>
				<p class="font-semibold text-gray-500 mt-2">
					Informe o que você perdeu para que a comunidade possa ajudar.
				</p>
			</div>
			<SearchX class="w-25 h-25 opacity-20" />
		</div>
		<div class="justify-end card-actions">
			<button class="btn btn-ghost text-blue-500">Preencher formulário <MoveRight /> </button>
		</div>
	</div>
</a>

<a class="card w-full bg-base-100 card-md shadow-sm mt-7" href="/registrar-item/encontrado">
	<div class="card-body">
		<div class="flex justify-between">
			<div>
				<div class=" bg-green-200 w-10 h-10 rounded-md btn btn-square btn-ghost cursor-default">
					<SearchCheck class="text-green-600 w-8" />
				</div>
				<h2 class="card-title font-semibold mt-4">Registrar item encontrado</h2>
				<p class="font-semibold text-gray-500 mt-2">
					Encontrou algo? Ajude a devolver ao dono registrando aqui.
				</p>
			</div>
			<SearchCheck class="w-25 h-25 opacity-20" />
		</div>
		<div class="justify-end card-actions">
			<button class="btn btn-ghost text-blue-500">Preencher formulário <MoveRight /> </button>
		</div>
	</div>
</a>
