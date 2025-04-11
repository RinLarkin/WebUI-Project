<script>
    import { onMount } from 'svelte';

    onMount(() => 
    {
        console.log("Purchase Page Loaded");
    });
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 

<h1>Purchase Tickets Here</h1>
<br>
<form>
    <div>
        <label for="adults">Adults: </label>
        <select id="adults" name="adults">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <br>
    <div>
        <label for="children">Children: </label>
        <select id="children" name="children">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <br>
    <div>
        <label for="students">Students: </label>
        <select id="students" name="students">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <br>
        <a href="/congrats"><input type="submit" value="Purchase"></a>
</form>

<style>
    div
    {
        background-color: sandybrown;
        width: 25%;
        padding: 15px;
        color: white;
    }

    select
    {
        padding: 5px;
        border: none;
    }

    input[type=submit]
    {
        background-color: #c83e4d;
        border: none;
        color: white;
        padding: 10px;
        cursor: pointer;
        float: left;
    }
</style>