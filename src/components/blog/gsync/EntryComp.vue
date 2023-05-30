<template>
    <div class="content">
        <h1 class="title">Что такое G-Sync?</h1>
        <p class="publish-data"><b>Опубликована:</b> 11 мая, 2023</p>
        <div class="banner">
            <img src="@/assets/img/news/gsync/gsync.png" class="preview" alt="banner">
        </div>
        <p class="text">G-Sync - это собственная технология адаптивной синхронизации, разработанная компанией Nvidia. Она
            направлена на то, чтобы предоставить геймерам более плавный игровой опыт путем согласования частоты обновления
            монитора с частотой кадров, генерируемых графическим процессором (GPU), что позволяет избежать мерцания и
            разрывов изображения на экране. В настоящее время она доступна на всех видеокартах RTX и большинстве видеокарт
            GTX (начиная с GTX 650Ti и новее), однако игровые мониторы не поставляются стандартно с этой технологией, так
            как стоимость внедрения G-Sync в монитор повышает его цену. Если вы хотите использовать G-Sync, убедитесь, что
            ваш монитор совместим с этой технологией.
            <br><br>
            G-Sync не следует путать с V-Sync, которая является опцией во многих играх и не является технологией, разработанной Nvidia.
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