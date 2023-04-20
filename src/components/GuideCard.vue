<template>
    <router-link to="" class="card">

        <div class="preview">
            <img src="@/assets/img/guide/benq.png" alt="preview">
        </div>

        <div class="text-block">
            <h2 class="title">Какой монитор выбрать?</h2>
            <p class="text">Все любители шутеров прекрасно знают, что игровые девайсы в какой-то мере решают. Конечно, самая
                крутая игровая мышь или самый...</p>
            <router-link to="" class="more">Узнать Больше</router-link>
        </div>

    </router-link>
</template>
<script>
export default {

}
</script>
<style scoped>
.card {
    display: flex;
    width: 750px;
    height: 220px;
    margin: 0 50px 60px 0;
    text-decoration: none;
    color: #fff;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
}

.preview img {
    width: 290px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}

.text-block {
    padding: 30px 40px;
}

.title {
    font-size: 24px;
    padding-bottom: 15px;
}

.text {
    font-size: 16px;
    line-height: 20px;
}

.more {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px 0 0;
}
</style>