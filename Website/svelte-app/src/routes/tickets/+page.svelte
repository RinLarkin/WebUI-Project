<script>
    import { onMount } from 'svelte';

    onMount(() => 
    {
        console.log("Tickets Page Loaded");
    });
</script>

<h1>Purchase Tickets Here</h1>
<div>
    <img src="/placeholder.png" alt="Placeholder">
    <h2>Family Ticket</h2>
    <h3>€50</h3>
    <p>For Families of 3+ Members</p>
</div>
  
<div>
    <img src="/placeholder.png" alt="Placeholder">
    <h2>Adult Ticket</h2>
    <h3>€15</h3>
    <p>Persons of 18+</p>
</div>

<div>
    <img src="/placeholder.png" alt="Placeholder">
    <h2>Child Ticket</h2>
    <h3>€5 - €10</h3>
    <p>Persons Under 18</p>
</div>

<br>

<div>
    <img src="/placeholder.png" alt="Placeholder">
    <h2>Student Ticket</h2>
    <h3>€12</h3>
    <p>Student ID Required</p>
</div>

<div>
    <img src="/placeholder.png" alt="Placeholder">
    <h2>Group Ticket</h2>
    <h3>€25+</h3>
    <p>Groups of 3+ Persons</p>
</div>

<div>
    <img src="/placeholder.png" alt="Placeholder">
    <h2>School Ticket</h2>
    <h3>€100</h3>
    <p>Students + Teacher</p>
</div>

<style>
    div
    {
        background-color: #5bc3eb;
        width: 500px;
        float: left;
        margin: 15px;
        padding: 15px;
    }

    img
    {
        width: 75%;
    }
</style>