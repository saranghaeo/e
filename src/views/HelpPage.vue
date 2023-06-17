<template>
    <div class="content">
        <h2 class="title">Как установить и применить настройки в игре.</h2>
        <div class="guide">
            <p class="text">1. Перейдите в раздел <b>Игроки</b> и выберите профиль игрока, у которого уже есть необходимые
                конфигурационные файлы. Скачайте эти файлы. <br><br></p>
            <div class="guide-img">
                <img src="@/assets/img/help/1.png" alt="help">
            </div>

            <p class="text">2. После загрузки файлов настройки нужно переместить в папку с игрой:<br><br></p>
            <p class="text">• Файл <b>config.cfg</b> переместите по следующему пути: C:\Program Files
                (x86)\Steam\steamapps\common\Counter-Strike
                Global Offensive\csgo\cfg.<br><br>
                *Примечание: Чтобы узнать расположение игры, откройте клиент Steam, нажмите правой кнопкой мыши на
                Counter-Strike: Global Offensive, выберите <b>Свойства</b> в контекстном меню, затем перейдите в раздел
                <b>Установленные файлы</b>. Нажав на <b>Обзор</b>, вы откроете папку с игрой.<br><br>
            </p>
            <div class="guide-img">
                <img src="@/assets/img/help/2.png" alt="help" style="margin-right: 20px; width: 400px;">
                <img src="@/assets/img/help/3.png" alt="help" style="width: 600px;">
            </div>

            <p class="text">• Файл <b>video.txt</b> переместите по следующему пути: C:\Program Files
                (x86)\Steam\userdata\905510814\730\local\cfg. Замените <b>905510814</b> на ваши уникальные цифры. Чтобы
                найти эти
                цифры, зайдите в клиент Steam, нажмите на значок Steam в верхнем левом углу, выберите <b>Настройки</b> в
                выпадающем
                меню, а затем в открывшемся окне вы увидите <b>Ваш код дружбы</b>. Используйте этот код для определения
                ваших
                уникальных цифр.<br><br></p>
            <div class="guide-img">
                <img src="@/assets/img/help/4.png" alt="help" style="margin-right: 20px; width: 400px;">
                <img src="@/assets/img/help/5.png" alt="help" style="width: 600px;">
            </div>

            <p class="text">3. После запуска игры откройте консоль разработчика и введите команду <b>exec config</b>. Чтобы
                включить консоль
                разработчика, перейдите в настройки игры и включите опцию <b>Игра -> Включить консоль разработчика</b>.
                Настройки
                видео будут автоматически применены.<br><br></p>
            <div class="guide-img">
                <img src="@/assets/img/help/6.png" alt="help">
            </div>

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

    background: rgba(0, 0, 0, 0.57);
    border-radius: 0px 0px 10px 10px;
    background: rgba(0, 0, 0, 0.57);
    border-radius: 10px;
    padding: 0 40px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.title {
    padding: 20px 0;
}

.guide {
    max-width: 95%;
}

.guide-img {
    display: flex;
    align-items: center;
    padding: 20px;
}

img {
    max-width: 55%;
    max-height: 55%;
}
</style>