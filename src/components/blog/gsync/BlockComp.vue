<template>
    <div>
        <h1 class="title">Intro</h1>
        <p class="text">Regular (non G-Sync compatible) monitors refresh the image on the screen at a fixed rate (i.e. their
            ‘refresh rate’). If you’ve got a 100Hz monitor it’ll be refreshing the screen 100 times per second. The
            framerate that your GPU puts out can vary though, depending on many factors (such as how much action is on
            screen, the power of said graphics card, …) and that isn’t ideal to get a smooth looking game.
            <br><br>
            If your PC (and thus, more importantly; your GPU) isn’t powerful enough to render enough frames to match your
            monitor’s refresh rate it will cause the image on your screen to stutter. This isn’t a massive issue in and of
            itself, but it’s not the most pleasant thing to look at and can hamper performance in, for example, multiplayer
            games. If your system is rendering more frames than what your monitor can display it can cause screen tearing
            (see the image above). This, again, isn’t a major issue in and of itself (some people don’t really mind
            stuttering or tearing, as long as it isn’t overdone) but it’s not nice to look at and can cause ingame
            performance issues.
        </p>
    </div>

    <div>
        <h1 class="title">How G-Sync Comes In</h1>
        <p class="text">G-Sync, when used correctly, eliminates screen tearing and screen stuttering by changing the
            monitor’s refresh rate (this is why you need a G-Sync compatible monitor and not just any monitor) to match the
            amount of frames the GPU is pushing at all times. This ensures that the GPU is never pushing out less frames
            than what the display is rendering, nor will it push out more frames than what the display is capable of. Note
            that G-Sync will cease to work properly if the framerate drops below 30 FPS.
            <br><br>
            G-Sync does what it promises to do expertly, however it is a proprietary technology, meaning that you have to
            invest in a monitor with a G-Sync module (which will cost extra) and you will need an Nvidia graphics card. It
            is possible to use G-Sync monitors with AMD cards, but the framerate will not be synchronised, thus giving on
            one the major advantages of getting a G-Sync compatible monitor.
            <br><br>
            If you are willing to invest in a G-Sync monitor and you want to play your games without suffering from any
            screen tearing or stuttering then G-Sync can be the answer to your problems, provided you’re willing to pay a
            bit more.</p>
    </div>
</template>
<script></script>
<style scoped>
.title {
    text-align: start;
    padding: 15px 0 20px 0;
}

.banner-or-video {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
    max-width: 1000px;
    padding: 30px 15px 30px 15px;
    line-height: 20px;
}</style>