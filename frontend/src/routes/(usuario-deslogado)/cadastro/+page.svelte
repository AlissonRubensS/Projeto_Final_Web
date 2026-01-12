<script>
	import { goto } from '$app/navigation';

	let apelido = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let error = '';
	let loading = false;

	async function handleCadastro() {
		<!-- logica do back -->}
</script>

<div class="min-h-screen grid grid-cols-2">
	
	<div
		class="relative bg-cover bg-center text-white px-12 flex flex-col justify-center"
		style="background-image: url('/campus-ufc.jpg');"
	>
		<div class="absolute inset-0 bg-black/60"></div>

		<div class="relative z-10 max-w-md">
			<h1 class="text-4xl font-bold mb-4">
				Encontrou algo<br />ou perdeu um<br />item no campus?
			</h1>

			<p class="text-sm leading-relaxed mb-6">
				Conectamos a comunidade acadêmica para recuperar pertences
				perdidos de forma rápida e segura. Faça login para começar,
				ou cadastre-se se não possuir uma conta.
			</p>

			<div class="flex gap-3">
				<span class="badge badge-outline">Acesso seguro</span>
				<span class="badge badge-outline">Exclusivo UFC</span>
			</div>
		</div>
	</div>

	<!-- COLUNA DIREITA -->
	<div class="flex items-center justify-center">
		<div class="w-full max-w-md px-6">

			<h2 class="text-3xl font-bold mb-1">Bem-Vindo (a)!</h2>
			<p class="text-sm text-gray-500 mb-6">
				Preencha seus dados para acessar o sistema.
			</p>

			<!-- Abas -->
			<div class="tabs tabs-bordered mb-6">
				<a class="tab" href="/login">Entrar</a>
				<a class="tab tab-active">Criar Conta</a>
			</div>

			<form class="flex flex-col gap-4" on:submit|preventDefault={handleCadastro}>

				<div>
					<label class="label text-sm font-medium">Apelido</label>
					<input
						type="text"
						placeholder="Ex: Ana Silva"
						class="input input-bordered w-full"
						bind:value={apelido}
						required
					/>
				</div>

				<div>
					<label class="label text-sm font-medium">E-mail</label>
					<input
						type="email"
						placeholder="Ex: usuario@alu.ufc.br"
						class="input input-bordered w-full"
						bind:value={email}
						required
					/>
					<p class="text-xs text-gray-400 mt-1">
						Insira seu melhor e-mail
					</p>
				</div>

				<div>
					<label class="label text-sm font-medium">Senha</label>
					<input
						type="password"
						placeholder="Crie uma senha forte"
						class="input input-bordered w-full"
						bind:value={password}
						required
					/>
					<p class="text-xs text-gray-400 mt-1">
						A senha deve conter 8 ou mais caracteres, incluindo
						dígitos e pelo menos um caractere especial
					</p>
				</div>

				<div>
					<label class="label text-sm font-medium">Confirmar Senha</label>
					<input
						type="password"
						placeholder="Repita a senha"
						class="input input-bordered w-full"
						bind:value={confirmPassword}
						required
					/>
				</div>

				{#if error}
					<p class="text-error text-sm">{error}</p>
				{/if}

				<button class="btn btn-primary mt-4" disabled={loading}>
					{loading ? 'Cadastrando...' : 'Cadastrar'}
				</button>
			</form>
		</div>
	</div>
</div>
