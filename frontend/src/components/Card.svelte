<script>
	import { Calendar, MapPin } from '@lucide/svelte';

	export let item;
	let status = item.find_date !== null ? 'Encontrado' : 'Perdido';
</script>

<div class="card bg-base-100 max-w-60 shadow-sm">
	<figure class="relative">
		<div
			class="badge badge-soft {status === 'Encontrado'
				? 'badge-success'
				: 'badge-warning'} absolute top-2 left-2"
		>
			{status}
		</div>
		<img src={item.url_photo} alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="card-title font-bold">{item.name}</h2>
		<p class="font-semibold text-gray-500">
			{item.observations}
		</p>
		<div class="flex gap-2 items-center">
			<MapPin class="text-blue-500" />
			<p class="font-semibold text-gray-500">
				{status === 'Encontrado' ? item.find_local : item.loss_local}
			</p>
		</div>
		<div class="flex gap-2 items-center">
			<Calendar class="text-blue-500" />
			<p class="font-semibold text-gray-500">
				{status === 'Encontrado' ? item.find_date : item.loss_date}
			</p>
		</div>

		<div class="card-actions">
			<button class="btn w-full">Ver detalhes</button>
		</div>
	</div>
</div>
