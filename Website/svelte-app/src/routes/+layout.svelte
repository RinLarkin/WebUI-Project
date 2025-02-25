<script>
    
</script>

<link rel="stylesheet" href="/styles/global.css"/>

<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer>
    <p>&copy; 2025 Svelte Project App. All Rights Reserved.</p>
</footer>

<style>
    header { background: #007bff; padding 1rem; text-align: center; }
    nav ul { display: flex; justify-content: center; list-style: none}
    nav ul li { margin: 0 15px; }
    nav ul li a { color: white; font-weight: bold; text-decoration: none; }
    main { padding: 2rem; text-align: center; }
    footer {background: #343a40; color: white; text-align: center; padding: 1rem; position: fixed; bottom: 0; width: 100%; }
</style>