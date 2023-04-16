<template>
    <div class="content">
        <img class="img-content" src="@/assets/img/main_page/left-1.png" alt="left">
        <img class="img-content mid" src="@/assets/img/main_page/mid-1.png" alt="mid">
        <img class="img-content" src="@/assets/img/main_page/right-1.png" alt="right">

        <div class="text-btn">

            <h1 class="title-main">Храни и делись своими настройками с другими пользователями</h1>

            <div class="button-join">
                <form action="https://steamcommunity.com/openid/login" method="post">
                    <input type="hidden" name="openid.identity"
                        value="http://specs.openid.net/auth/2.0/identifier_select" />
                    <input type="hidden" name="openid.claimed_id"
                        value="http://specs.openid.net/auth/2.0/identifier_select" />
                    <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
                    <input type="hidden" name="openid.mode" value="checkid_setup" />
                    <input type="hidden" name="openid.realm" value="https:\\yourOpenIdRealm.com" />
                    <input type="hidden" name="openid.return_to" value="https:\\YourDomainUrlToReturnTo.com" />
                    <Button type="submit" class="join">Присоединяйся</Button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
}

.img-content {
    position: relative;
    width: 300px;
    height: 570px;
    filter: brightness(80%)
}

.mid {
    width: 460px;
    height: 700px;
    margin: 0 20px;
}

.text-btn {
    position: absolute;
    margin: 0 auto;
    max-width: 680px;
}

.title-main {
    font-size: 48px;
    text-align: center;
}

.button-join {
    display: flex;
    justify-content: center;
    margin-top: 90px;
}

.join {
    font-size: 20px;
    font-weight: 500px;
    padding: 5px 25px;
    background: none;
    color: #fff;
    border: 1px solid #FFFFFF;
    box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 1);
    transition: all 0.3s;
}

.join:hover {
    color: #000000;
    background-color: #ffffff;
}
</style>