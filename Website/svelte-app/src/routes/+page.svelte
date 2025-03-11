<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => 
    {
        console.log("Home Page Loaded");
    });
</script>

<h1>Welcome to Our Svelte Project</h1>
<p>This is the HomePage of Our SvelteKit App</p>

<!-- Galler Container -->
<div class="gallery">
    <Card title="Card 1" description="First Card" />
    <Card title="Card 2" description="Second Card" />
    <Card title="Card 3" description="Third Card" />
    <Card title="Card 4" description="Fourth Card" />
    <Card title="Card 5" description="Fifth Card" />
    <Card title="Card 6" description="Sixth Card" />
</div>

<style>
    .gallery 
    {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin-top: 2rem;
    }

    .gallery::before 
    {
        content: "Featured Cards";
        font-size: 1.5rem;
        font-weight: bold;
    }

    .gallery::after 
    {
        content: "";
        width: 60%;
        height: 3px;
        background: linear-gradient(to right, #007bff, transparent);
        margin: 2rem auto 0 auto;
    }

    :global(.gallery > .card:first-child) 
    {
        border: 3px solid gold;
    }

    :global(.gallery > .card:last-child) 
    {
        border: 3px solid crimson;
    }

    :global(.gallery > .card:nth-child(even)) 
    {
        background-color: #ebebeb;
    }

    :global(.gallery > .card:hover) 
    {
        transform: scale(1.1); 
        z-index: 2;
    }

    :global(.gallery > .card:hover ~ .card) 
    {
        transform: scale(0.9);
        opacity: 0.8;
    }

    :global(.gallery > .card:hover + .card)
    {
        transform: scale(0.95);
        opacity: 0.9;
    }

    :global(.gallery > .card:nth-child(3n))
    {
        border-left: 5px solid #98caff;
    }

    :global(.gallery > .card:not(:first-child):not(:last-child))
    {
        border-radius: 18px;
    }
    </style>