<!-- Home Page -->
<script>
    import { onMount } from 'svelte';

    onMount(() => 
    {
        console.log("Home Page Loaded");
    });
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 

<h1>Welcome Visitors!</h1>
<br>
<div id="image">
    <img src="/park.png" alt="Amusement Park Art">
</div>

<div id="welcome">
    <p>Welcome to All Amusements, the place to be for endless entertainment.</p>
</div>

<style>
    img
    {
        width: 50%;
        float: left;
        border: 10px ridge sandybrown;
    }

    #image
    {
        padding-right: 50px;
    }

    #welcome
    {
        background: sandybrown;
        width: 50%;
        float: right;
        padding: 15px;
        color: white;
        font-size: larger;
    }
</style>