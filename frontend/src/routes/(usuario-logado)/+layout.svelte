<script>
	import Navbar from '../../components/Navbar.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

<Navbar />
<div class="bg-[#F5F9FF] min-h-screen">
	<div class="max-w-5xl pt-10 mx-auto">{@render children()}</div>
</div>
