<script>
	import { page } from '$app/state';
</script>

<div class="navbar bg-base-100 shadow-sm px-6 justify-between">
	<div class="">
		<a class="flex items-center gap-6" href="/">
			<img class="w-9" src="/brasao-UFC.png" alt="logo UFC" />
			<p class="font-bold text-2xl">Achados & Perdidos</p>
		</a>
	</div>

	{#if page.url.pathname !== '/login' && page.url.pathname !== '/cadastro'}
		<div>
			<ul class="menu menu-horizontal px-1 font-medium">
				<li><a href="/itens-perdidos">Itens Perdidos</a></li>
				<li><a href="/itens-encontrados">Itens Encontrados</a></li>
				<li><a href="/registrar-item">Registrar Item</a></li>
			</ul>
		</div>

		<div class="flex gap-2">
			<a class="flex items-center gap-3 btn btn-ghost py-1" href="/minha-area-aluno">
				<p>Minha Área</p>
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						/>
					</div>
				</div>
			</a>
		</div>
	{/if}
</div>
