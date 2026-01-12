<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let error = '';
	let loading = false;

	
	let users: any[] = [];

	
	onMount(() => {
		users = [
			{
				id: 1,
				email: 'joao@alu.ufc.br',
				password: 'Joao@123',
				role: 'USER'
			},
			{
				id: 2,
				email: 'seguranca@ufc.br',
				password: 'Seg@123',
				role: 'SECURITY'
			}
		];
	});

	async function handleLogin() {
		error = '';
		loading = true;

		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Busca usuário
		const user = users.find(
			(u) => u.email === email && u.password === password
		);

		if (!user) {
			error = 'E-mail ou senha inválidos.';
			loading = false;
			return;
		}

		// Simula sessão 
		const session = {
			userId: user.id,
			role: user.role,
			email: user.email
		};

		console.log('Sessão iniciada:', session);

		loading = false;

		if (user.role === 'USER') {
			goto('/pagina-inicial-aluno');
			return;
		}

		if (user.role === 'SECURITY') {
			goto('/usuario-logado/pagina-inicial-seguranca');
		}

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

	
	<div class="flex items-center justify-center">
		<div class="w-full max-w-md px-6">

			<h2 class="text-3xl font-bold mb-1">Bem-Vindo (a)!</h2>
			<p class="text-sm text-gray-500 mb-6">
				Preencha seus dados para acessar o sistema.
			</p>

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
