<template>
    <div class="content">

        <div class="card">
            <h2 class="title">Bind</h2>

            <p class="text">Генератор биндов</p>

            <router-link to="/generator/bind" class="btn">
                <p class="btn-text">Открыть</p>
            </router-link>
        </div>

        <div class="card">
            <h2 class="title">Crosshair</h2>

            <p class="text">Генератор прицела</p>

            <router-link to="/generator/crosshair" class="btn">
                <p class="btn-text">Открыть</p>
            </router-link>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.content {
    padding: 60px 0;
    max-width: 1540px;
    margin: 0 auto;
    height: 70vh;
    display: flex;
}

.card {
    width: 420px;
    height: 260px;
    background: #000000;
    box-shadow: inset 0px 0px 30px rgba(96, 0, 252, 0.33);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
}

.title {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 60px;
    text-align: center;
    padding: 30px 30px 0 30px;
}

.text {
    font-weight: 500;
    font-size: 20px;
    padding: 0 30px 30px 30px;
    text-align: center;
}

.btn {
    width: 420px;
    height: 60px;
    background: #220551;
    border-radius: 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

.btn-text { 
    color: #fff;
    font-weight: 700;
    font-size: 24px;
}

.btn:hover {
    height: 80px;
}
</style>