<script>
    let isOpen = false; // Menu State [Open/Close]
</script>
<nav>
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle Navigation">

    </button>

    <ul class:open={isOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav
    {
        background-color: #007bff;
        padding: 1rem;
        text-align: center;
    }

    nav ul 
    {
        display: flex; 
        justify-content: center; 
        list-style: none
    }

    nav ul li 
    { 
        margin: 0 15px; 
    }

    nav ul li a 
    { 
        color: white; 
        font-weight: bold; 
        text-decoration: none; 
    }

    .burger
    {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    @media (max-width: 768px)
    {
        .burger
        {
            display: block;
        }

        nav ul
        {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #007bff;
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        nav ul.open
        {
            display: flex;
        }

        nav ul li 
        {
            padding: 10px 20px;
        }
    }
</style>