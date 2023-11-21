<script lang="ts">
    import AnimalCard from '$lib/components/profilePage/animalCard.svelte';
    import AnimalContainer from '$lib/components/profilePage/animalContainer.svelte';
    import ProfileCard from '$lib/components/profilePage/profileCard.svelte';
    import SettingsCard from '$lib/components/profilePage/settingsCard.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<style>
    body{
        background-color: #F2F2F2;
    }
</style>

<body>
    
    <main>
       <SettingsCard />
    </main>
</body>