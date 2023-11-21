<script>
    export let address =
        "Achter de Houttuinen 50, 4331 NJ Middelburg (Honney PIE Coffe)";
    export let description =
        "Join us for a gathering to discuss a diverse array of foods, from local delights to global flavors. Let's celebrate our love for culinary exploration and share our passion for all things delicious!";
</script>

<div class="description-box">
    <p class="address">{address}</p>
    <p class="description">{description}</p>
</div>

<style>
    .description-box {
        background-color: #f9f9f9;
        border-radius: 20px;
        box-shadow: 0 2px 4px rgba(117, 106, 106, 0.8);
        padding: 40px; /* Increased padding around the content */
        margin: 10px;
        width: 100%;
        min-height: 250px; /* Slightly less height */
    }

    .address {
        font-weight: bold;
        margin-bottom: 20px; /* Increased margin between address and description */
    }

    .description {
        line-height: 1.4;
        text-align: justify;
        margin-top: 10px; /* Added margin on top of the description */
    }
</style>
