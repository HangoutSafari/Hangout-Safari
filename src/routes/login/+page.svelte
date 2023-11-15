<script>
import Login from '../../lib/components/login/login.svelte';
import Circle from '../../lib/components/login/circle.svelte';
import Navbar from '$lib/components/navbar.svelte';
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body class="background overflow-x-hidden" >
            <Navbar/>   
    <div class="h-screen flex items-center justify-center">
        <div class="absolute">
            <Circle/>
        </div>
        <div class="absolute">
            <Login/>
        </div>
    </div>
</body>
</html>

