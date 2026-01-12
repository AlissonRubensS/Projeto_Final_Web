<script>
	import { onMount } from 'svelte';
	import { User, Mail, Lock, Phone, Briefcase, SearchX, SearchCheck, MoveRight, Pencil, Save } from '@lucide/svelte';

	let isEditing = false;
	let user = { id: 2, name: "", email: "", password: "", phone_number: "", access_type: "" };

	const API_URL = "https://projeto-final-web-uy9e.onrender.com/users"; // Atualizado para a API do Render

	async function loadUser() {
		try {
			const res = await fetch(`${API_URL}/${user.id}`);
			if (res.ok) {
				const data = await res.json();
				const fetched = Array.isArray(data) ? data[0] : data;
				if (fetched) user = { ...user, ...fetched };
			}
		} catch (err) { console.error("Erro ao carregar:", err); }
	}

	async function saveProfile() {
		try {
			const res = await fetch(`${API_URL}/${user.id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user)
			});
			if (res.ok) {
				alert("Perfil atualizado!");
				isEditing = false;
			}
		} catch (err) { alert("Erro ao conectar com o servidor."); }
	}

	onMount(loadUser);
</script>

<style>
	:global(body) { font-family: 'Inter', sans-serif; }
</style>

<div class="max-w-5xl mx-auto p-4 pb-20">
	<div class="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center gap-8 mb-8 border border-gray-100">
		<div class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-inner">
			<User size={64} class="text-gray-400" />
		</div>
		<div class="flex-1 text-center md:text-left">
			<h1 class="text-2xl font-bold text-gray-800 ">{user.name || "Funcionário(a)"}</h1>
			<p class="text-gray-500 font-medium text-lg ">Funcionário(a) - {user.access_type || "Função"}</p>
		</div>
		<div class="flex gap-3">
			{#if !isEditing}
				<button class="btn btn-ghost bg-gray-100 px-8 font-bold text-xs ">Sair</button>
				<button on:click={() => isEditing = true} class="btn btn-primary bg-blue-600 border-none text-white px-8 font-bold text-xs uppercase">
					<Pencil size={18} /> Editar Perfil
				</button>
			{:else}
				<button on:click={() => isEditing = false} class="btn btn-ghost bg-gray-100 px-8 font-bold text-xs ">Cancelar</button>
				<button on:click={saveProfile} class="btn btn-success bg-green-600 border-none text-white px-8 font-bold text-xs uppercase">
					<Save size={18} /> Salvar
				</button>
			{/if}
		</div>
	</div>

	<div class="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
		<div class="form-control w-full">
			<label class="label"><span class="label-text font-bold text-gray-700 uppercase text-xs">Usuário</span></label>
			<label class="input input-bordered flex items-center gap-2 {isEditing ? 'bg-white border-blue-400' : 'bg-gray-50'} h-12">
				<User size={18} class="text-gray-400" />
				<input type="text" class="grow" bind:value={user.name} readonly={!isEditing} />
			</label>
		</div>
		<div class="form-control w-full">
			<label class="label"><span class="label-text font-bold text-gray-700 uppercase text-xs">E-mail</span></label>
			<label class="input input-bordered flex items-center gap-2 {isEditing ? 'bg-white border-blue-400' : 'bg-gray-50'} h-12">
				<Mail size={18} class="text-gray-400" />
				<input type="text" class="grow" bind:value={user.email} readonly={!isEditing} />
			</label>
		</div>
		<div class="form-control w-full">
			<label class="label"><span class="label-text font-bold text-gray-700 uppercase text-xs">Senha</span></label>
			<label class="input input-bordered flex items-center gap-2 {isEditing ? 'bg-white border-blue-400' : 'bg-gray-50'} h-12">
				<Lock size={18} class="text-gray-400" />
				<input type="password" class="grow" bind:value={user.password} readonly={!isEditing} />
			</label>
		</div>
		<div class="form-control w-full">
			<label class="label"><span class="label-text font-bold text-gray-700 uppercase text-xs">WhatsApp</span></label>
			<label class="input input-bordered flex items-center gap-2 {isEditing ? 'bg-white border-blue-400' : 'bg-gray-50'} h-12">
				<Phone size={18} class="text-gray-400" />
				<input type="text" class="grow" bind:value={user.phone_number} readonly={!isEditing} />
			</label>
		</div>
		<div class="form-control w-full md:col-span-2">
			<label class="label"><span class="label-text font-bold text-gray-700 uppercase text-xs">Função / Cargo</span></label>
			<label class="input input-bordered flex items-center gap-2 {isEditing ? 'bg-white border-blue-400' : 'bg-gray-50'} h-12">
				<Briefcase size={18} class="text-gray-400" />
				<input type="text" class="grow" bind:value={user.access_type} readonly={!isEditing} />
			</label>
		</div>
	</div>

	{#if !isEditing}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<a href="/inventario-funcionario" class="card bg-white shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all group">
				<div class="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-yellow-600">
					<SearchX size={24} />
				</div>
				<h2 class="text-xl font-bold text-gray-800">Ver inventário</h2>
				<p class="text-gray-500 text-sm mb-4">Gerencie o catálogo completo de achados e perdidos.</p>
				<span class="text-blue-500 font-bold flex items-center gap-2 mt-auto">Acessar <MoveRight size={20} class="group-hover:translate-x-2 transition-transform" /></span>
			</a>

			<a href="/itens-entregues-funcionario" class="card bg-white shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all group">
				<div class="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
					<SearchCheck size={24} />
				</div>
				<h2 class="text-xl font-bold text-gray-800">Lista de itens entregues</h2>
				<p class="text-gray-500 text-sm mb-4">Visualize o histórico de devoluções realizadas.</p>
				<span class="text-blue-500 font-bold flex items-center gap-2 mt-auto">Acessar <MoveRight size={20} class="group-hover:translate-x-2 transition-transform" /></span>
			</a>
		</div>
	{/if}
</div>