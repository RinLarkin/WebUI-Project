<!-- Home Page -->
<script>
    import { onMount } from 'svelte';

    onMount(() => 
    {
        console.log("Home Page Loaded");
    });
</script>

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
        border: 10px ridge #c83e4d;
    }

    #image
    {
        padding-right: 50px;
    }

    #welcome
    {
        background: #5bc3eb;
        width: 50%;
        float: right;
        padding: 15px;
        color: white;
        font-size: larger;
    }
</style>