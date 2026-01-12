<script>
	import { page } from '$app/stores';
	import { Calendar, Mail, MapPin, Share2, UserRound } from '@lucide/svelte';

	console.log($page.params.id);

	async function copiarUrlAtual() {
		const url = window.location.href;
		await navigator.clipboard.writeText(url);
		alert('Link copiado para a área de transferência!');
	}
</script>

<div class="flex gap-8">
	<div class="flex-1">
		<figure>
			<img
				src="https://imgs.search.brave.com/GQxj0VDpTMdWgtfFSXaEO3Xujd7iU-5gXjMztu5o6Os/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGNkbi5jb20u/YnIvaW1nL2ltZ19w/cm9kLzMxMzQ5OS9t/b2NoaWxhX2RlbGxf/ZWNvbG9vcF9lc3Nl/bnRpYWxfcGFyYV9u/b3RlYm9va3NfYXRl/XzE2X3ByZXRhX2Nw/MzcyNF8xOTY4OF81/XzE0MTQyMGY0NzU2/Y2QwMzAwYjlhNTcy/NDUwNzA3ZTNiLmpw/Zw"
				alt="Mochila dell preta"
			/>
		</figure>

		<div class="card w-full bg-base-100 card-md shadow-sm mt-4">
			<div class="card-body">
				<p class="font-semibold text-gray-500 border-b border-gray-400">ENTRAR EM CONTATO COM</p>
				<div class="flex gap-4 mt-2">
					<div class="avatar avatar-placeholder">
						<div class="bg-gray-200 text-neutral-content w-20 rounded-full">
							<span class="text-3xl"><UserRound class="text-gray-500" /></span>
						</div>
					</div>
					<div class="">
						<h1 class="font-bold text-2xl mb-2">Mateus Silva</h1>
						<div class="flex w-fit gap-2 items-center bg-gray-200 rounded-md px-2">
							<Mail class="w-5" />
							<p class="font-semibold">mateussilva@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex-1">
		<div class="badge badge-soft badge-warning border border-amber-200">Item perdido</div>

		<h1 class="font-bold text-3xl my-2">Mochila Dell Preta</h1>

		<div class="card w-full bg-base-100 card-md shadow-sm my-5">
			<div class="card-body">
				<p class="font-semibold text-gray-500 border-b border-gray-400">INFORMAÇÕES DO REGISTRO</p>

				<p class="font-semibold text-gray-500 mt-2">Data da perda</p>
				<div class="flex gap-2 items-center">
					<Calendar class="text-blue-500" />
					<p class="font-semibold text-gray-500">12/10/2025</p>
				</div>
				<p class="font-semibold text-gray-500 mt-2">Local em que foi visto pela última vez</p>
				<div class="flex gap-2 items-center">
					<MapPin class="text-blue-500" />
					<p class="font-semibold text-gray-500">Sala 2, Unidade A</p>
				</div>
			</div>
		</div>
		<p class="font-bold">Descrição:</p>
		<p class="font-semibold text-gray-500 mb-5">
			Mochila Dell preta contendo um estojo e um copo de café da tampa preta
		</p>
		<div class="card-actions">
			<button class="btn btn-primary w-full" on:click={copiarUrlAtual}
				><Share2 class="w-4" />Compartilhar</button
			>
		</div>
	</div>
</div>
