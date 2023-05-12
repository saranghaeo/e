<template>
    <div>
        <h1 class="title">What is G-Sync?</h1>
        <p class="publish-data"><b>Опубликована:</b> 11 мая, 2023</p>
        <div class="banner">
            <img src="@/assets/img/news/gsync/gsync.png" class="preview" alt="banner">
        </div>
        <p class="text">G-Sync is a proprietary adaptive sync technology made by Nvidia. It aims to give gamers a smoother
            gameplay experience by matching a monitor’s refresh rate with the frame rate that the GPU is pushing out, thus
            eliminating screen stuttering or tearing. It is currently available on all RTX cards and most GTX graphics cards
            (GTX 650Ti and newer), though gaming monitors don’t come standard with this technology, as the cost of
            implementing G-Sync in a monitor raises the price. If you wish to use G-Sync, make sure to double check if your
            monitor is compatible.
            <br><br>
            G-Sync is not to be confused with V-Sync, which is an option in many games and is not a technology developed by
            Nvidia.
        </p>
    </div>
</template>
<script></script>
<style scoped>
.publish-data {
    padding: 10px 0 30px 0px;
    font-size: 16px;
}

.banner img {
    width: 1000px;
    height: 560px;
}

.text {
    max-width: 1000px;
    padding: 15px;
    line-height: 20px;
    font-size: 16px;
}</style>