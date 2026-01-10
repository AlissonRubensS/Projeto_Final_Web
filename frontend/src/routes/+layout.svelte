<script>
	import Navbar from '../components/Navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
<div class="max-w-5xl mt-10 mx-auto">{@render children()}</div>
