<template>
    <div class="content">
        <div class="block" v-if="Authstore.user">
            <div class="profile-block">
                <div class="title">
                    <img src="@/assets/img/player/settings.png" alt="icon">
                    <h3>Настройки графики</h3>
                </div>
                <h4 class="sub-title">Основные</h4>
                <table class="settings">
                    <tbody>
                        <tr class="number">
                            <th>Resolution</th>
                            <td>1280x960</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Aspect Ratio</th>
                            <td>4:3</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Scaling Mode</th>
                            <td>Stretched</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Color Mode</th>
                            <td>Computer Monitor</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Brightness</th>
                            <td>130%</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Display Mode</th>
                            <td>Fullscreen</td>
                        </tr>
                    </tbody>
                </table>
                <h4 class="sub-title">Дополнительные</h4>
                <table class="settings">
                    <tbody>
                        <tr class="number">
                            <th>Global Shadow Quality</th>
                            <td>Very Low</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Model/Texture Detail</th>
                            <td>Low</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Texture Streaming</th>
                            <td>Disabled</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Effect Detail</th>
                            <td>High</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Shader Detail</th>
                            <td>High</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Boost Player Contrast</th>
                            <td>Disabled</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();
</script>
<style scoped>
.sub-title {
    font-weight: 600;
    font-size: 20px;
    padding: 10px 0 10px 100px;
}

table.settings>tbody tr {
    position: relative;
    padding-bottom: 10px;
    margin-top: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

tr:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
}

tbody:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: black;
}

.number {
    width: 235px;

}

.number th {
    font-size: 14px;
    font-weight: 500;
}

.number td {
    font-size: 14px;
    font-weight: 700;
}

.settings {
    display: flex;
    flex-wrap: wrap;
    padding-left: 70px;
}

.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 1px;
}

.block {
    width: 1100px;
    display: flex;
}

.profile-block {
    width: 100%;
    background: #000000;
    box-shadow: inset 5px 5px 35px rgba(255, 255, 255, 0.4);
    border-radius: 10px 10px 10px 10px;
    padding-bottom: 50px;
}

.title {
    display: flex;
    padding: 10px 60px;
    font-size: 24px;
    align-items: center;
}

.title img {
    height: 24px;
    padding-right: 5px;
}
</style>