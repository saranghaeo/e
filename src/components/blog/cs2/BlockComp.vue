<template>
    <div>
        <h1 class="title">Responsive Smokes</h1>
        <div class="banner-or-video">
            <iframe width="970" height="545" src="https://www.youtube.com/embed/_y9MpNcAitQ" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <p class="text">Smoke grenades will get a complete overhaul in CS2, with smokers being affected by the environment.
            Smokes will naturally expand (and fill out crevices and so on) and will respond to lighting. The most important
            change for competitive players will be that smokes will change with grenade impacts and bullets flying through
            them, making them much more dynamic ingame.</p>
    </div>

    <div>
        <h1 class="title">No more 64 Tick</h1>
        <div class="banner-or-video">
            <iframe width="970" height="545" src="https://www.youtube.com/embed/GqhhFl5zgA0" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <p class="text">64 tick servers have long been the bane of CS:GO matchmaking system, with many competitive players
            playing on third party servers due to the fact that those servers have 128 tick servers. In short: the tickrate
            of a server determines how many times the server evaluates moving, shooting (i.e. player inputs) and other
            inputs in order to translate them to the game. On a 64-tick server, there are 64 ‘evaluation moments’ per
            second, on a 128 tick server there will be 128 evaluation moments. The higher the tickrate, the more responsive
            a server feels. <br><br>

            With CS2, Valve will introduce ‘sub-tick updates’, meaning that the server immediately registers any inputs ,
            making the experience even smoother than playing on 128 tick servers. This will be a welcome addition for
            competitive players and it might eliminate the need to play on third party servers altogether, though it has to
            be said that matchmaking has also historically been a major reason for players to move towards third party
            services.</p>
    </div>

    <div>
        <h1 class="title">Visual Overhaul</h1>
        <div class="banner-or-video">
            <iframe width="970" height="545" src="https://www.youtube.com/embed/ExZtISgOxEQ" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <p class="text">All CS:GO maps will receive a visual overhaul to make the game look more modern, and this will
            happen in three tiers. The ‘Touchstone Maps’ (such as Dust 2 and Mirage; iconic maps that have been around since
            forever) will only receive updates to the lighting while other maps will introduce new materials, lighting, and
            reflections. Older maps will be fully rebuilt from the ground up. In addition, player models as well as weapon
            models will receive a high-res overhaul in order to make the game look more modern.</p>
    </div>
</template>
<script></script>
<style scoped>
.title {
    text-align: start;
    padding: 15px 0 20px 0;
}
.banner-or-video{
    display: flex;
    justify-content: center;
    align-items: center;
}
.text {
    max-width: 1000px;
    padding: 30px 15px 30px 15px;
    line-height: 20px;
}</style>