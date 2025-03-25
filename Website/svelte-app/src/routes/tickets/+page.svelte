<script>
    import { onMount } from 'svelte';

    onMount(() => 
    {
        console.log("Tickets Page Loaded");
    });
</script>

<h1>Purchase Tickets Here</h1>
<div>
    <img src="/family.jpg" alt="Family">
    <h2>Family Ticket</h2>
    <h3>€50</h3>
    <p>For Families of 3+ Members</p>
    <br>
    <a href="/#" class="button">Buy Now</a>
</div>
  
<div>
    <img src="/adult.jpg" alt="Adult">
    <h2>Adult Ticket</h2>
    <h3>€15</h3>
    <p>Persons of 18+</p>
    <br>
    <a href="/#" class="button">Buy Now</a>
</div>

<div>
    <img src="/children.jpg" alt="Children">
    <h2>Child Ticket</h2>
    <h3>€5 - €10</h3>
    <p>Persons Under 18</p>
    <br>
    <a href="/#" class="button">Buy Now</a>
</div>

<div>
    <img src="/student.jpg" alt="Student">
    <h2>Student Ticket</h2>
    <h3>€12</h3>
    <p>Student ID Required</p>
    <br>
    <a href="/#" class="button">Buy Now</a>
</div>

<div>
    <img src="/group.jpg" alt="Group of People">
    <h2>Group Ticket</h2>
    <h3>€25+</h3>
    <p>Groups of 3+ Persons</p>
    <br>
    <a href="/#" class="button">Buy Now</a>
</div>

<div>
    <img src="/school.jpg" alt="School Children">
    <h2>School Ticket</h2>
    <h3>€100</h3>
    <p>Students + Teacher</p>
    <br>
    <a href="/#" class="button">Buy Now</a>
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
        width: 100%;
    }

    .button
    {
        background-color: white;
        color: #5bc3eb;
        font-size: 16px;
        text-align: center;
        padding: 5px;
        width: 100px;
        height: 35px;
        display: inline-block;
        text-decoration: none;
    }
</style>