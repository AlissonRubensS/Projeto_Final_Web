<script>
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let error = '';
	let loading = false;

	async function handleLogin() {
		//<!-- logica do back -->
	}
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
				Conectamos a comunidade acadêmica para recuperar pertences perdidos de forma rápida e
				segura. Faça login para começar, ou cadastre-se se não possuir uma conta.
			</p>

			<div class="flex gap-3">
				<span class="badge badge-outline">Acesso seguro</span>
				<span class="badge badge-outline">Exclusivo UFC</span>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-center">
		<div class="w-full max-w-md px-6">
			<h2 class="text-3xl font-bold mb-1">Bem-Vindo (a)!</h2>
			<p class="text-sm text-gray-500 mb-6">Preencha seus dados para acessar o sistema.</p>

			<!-- Abas -->
			<div class="tabs tabs-bordered mb-6">
				<a class="tab tab-active">Entrar</a>
				<a class="tab" href="/cadastro">Criar Conta</a>
			</div>

			<form class="flex flex-col gap-4" on:submit|preventDefault={handleLogin}>
				<div>
					<label class="label text-sm font-medium">E-mail</label>
					<input
						type="email"
						placeholder="Ex: usuario@alu.ufc.br"
						class="input input-bordered w-full"
						bind:value={email}
						required
					/>
				</div>

				<div>
					<label class="label text-sm font-medium">Senha</label>
					<input
						type="password"
						placeholder="Digite sua senha"
						class="input input-bordered w-full"
						bind:value={password}
						required
					/>
				</div>

				{#if error}
					<p class="text-error text-sm">{error}</p>
				{/if}

				<button class="btn btn-primary mt-4" disabled={loading}>
					{loading ? 'Entrando...' : 'Entrar'}
				</button>
			</form>
		</div>
	</div>
</div>
