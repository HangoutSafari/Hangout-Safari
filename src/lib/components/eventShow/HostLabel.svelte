<div class="host-label">HOST</div>

<style>
    .host-label {
        padding: 25px 50px;
        background-color: #ffffff;
        border-radius: 20px;
        font-weight: bold;
        font-size: 28px;
        box-shadow: 0 2px 4px rgba(117, 106, 106, 0.8);
        color: #333333;
        position: absolute; 
        top: calc(50% + 20px); 
        transform: translateY(-80%);
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 50px; 
    }

    .host-label::after {
        content: '';
        display: inline-block;
        width: 60px; 
        height: 60px; 
        background-color: blue;
        border-radius: 50%;
        margin-left: 50px; 
    }
</style>
