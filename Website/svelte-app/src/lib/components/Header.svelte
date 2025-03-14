<script>
    import { Navigation } from "$lib"
</script>

<header>
    <!-- Logo -->
    <div class="logo">
        <a href="/"><img src="/logo.png" alt="Website Logo"></a>
        <h1>Amusement Park Website</h1>
    </div>
    <Navigation />
</header>

<style>
    header 
    {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #c83e4d;
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

    @media (max-width: 768px)
    {
        header
        {
            flex-direction: column;
            text-align: center;
        }

        .logo
        {
            justify-content: center;
        }
    }
</style>