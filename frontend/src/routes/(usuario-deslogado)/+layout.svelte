<script>
	import Navbar from '../../components/Navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
<div class="bg-[#F5F9FF] min-h-screen">
	<div class="">{@render children()}</div>
</div>
