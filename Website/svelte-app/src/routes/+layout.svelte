<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
</script>

<Header />

<main>
    <slot />
</main>

<Footer />

<style>
    main 
    { 
        padding: 2rem; 
        text-align: center;
    }
</style>