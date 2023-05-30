<template>
    <div class="content">
        <h1 class="title">Что такое частота кадров?</h1>
        <p class="publish-data"><b>Опубликована:</b> 11 мая, 2023</p>
        <div class="banner">
            <img src="@/assets/img/news/fps/fps.gif" class="preview" alt="banner">
        </div>
        <p class="text">Частота кадров (framerate) - это частота, с которой изображения появляются на экране или дисплее.
            Современные дисплеи работают путем отображения серии кадров (практически статических изображений) в быстром
            темпе, вызывая визуальную систему видеть движение. Частота кадров выражается в герцах (Гц) или кадрах в секунду
            (FPS - Frames Per Second). Например, монитор с частотой обновления 60 Гц будет отображать 60 кадров в секунду.
            <br><br>
            Частота кадров имеет важное значение в играх по ряду причин, прежде всего для достижения плавности. Чем выше
            частота кадров, тем более плавное становится изображение на экране, что делает более легким и естественным
            отслеживание быстро движущихся объектов на экране.
        </p>
    </div>
</template>
<script></script>
<style scoped>
.content {
    background: rgba(0, 0, 0, 0.57);
    border-radius: 10px 10px 0 0;
    padding: 0 20px;
}

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