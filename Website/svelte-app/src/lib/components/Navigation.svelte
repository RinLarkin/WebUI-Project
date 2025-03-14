<script>
    let isOpen = false; // Menu State [Open/Close]
</script>
<nav>
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle Navigation">

    </button>

    <ul class:open={isOpen}>
        <li><a href="/tickets">Tickets</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/map">Map</a></li>
        <li><a href="/getting_there">Getting There</a></li>
    </ul>
</nav>

<style>
    nav
    {
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
        font-size: 25px;
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