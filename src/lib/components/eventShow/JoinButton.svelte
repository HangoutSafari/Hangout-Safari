<button on:click={() => console.log("Join button clicked")}> JOIN </button>

<style>
    button
    {
        background-image: linear-gradient(to right, #f34439, #ff8d07);
        border-radius: 26px; 
        color: white;
        padding: 10px 40px;
        font-weight: bold;
        font-size: 24px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-image 0.3s ease;
        box-shadow: 0 2px 4px rgba(136, 134, 134, 1);
    }

    button:hover
    {
        background-image: linear-gradient(to right, #e63900, #ff7c00);
    }

    button:active
    {
        background-image: linear-gradient(to right, #cc3300, #e66a00);
    }
</style>

