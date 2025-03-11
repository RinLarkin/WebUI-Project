<script>
    import { Navigation } from "$lib"
</script>

<header>
    <!-- Logo -->
    <div class="logo">
        <img src="/logo.png" alt="Website Logo">
        <h1>Svelte App Project</h1>
    </div>
    <Navigation />
</header>

<style>
    header 
    {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem; 
    }

    .logo
    {
        display: flex;
        align-items: center;
    }

    .logo img
    {
        width: 50px;
        margin-right: 0.625rem;
    }
</style>