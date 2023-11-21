<script>
    export let date = "27/11/2023";
    export let startTime = "12:00";
    export let endTime = "14:00";
</script>

<div class="time-data">
    <div class="date">{date}</div>
    <div class="separator"></div>
    <div class="time">{startTime} - {endTime}</div>
</div>

<style>
    .time-data {
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(117, 106, 106, 0.8);
        padding: 16px 80px;
        font-size: 18px;
        color: #333;
    }

    .date, .time {
        font-weight: bold;
    }

    .separator {
        width: 4px;
        height: 24px;
        background-color: #ff4500;
        margin: 0 12px;
    }
</style>
