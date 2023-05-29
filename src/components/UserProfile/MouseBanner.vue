<template>
    <div class="content">
        <div class="block">
            <div class="profile-block">
                <div class="title">
                    <img src="@/assets/img/player/mouse.png" alt="icon">
                    <h3>Мышь</h3>
                </div>
                <table class="settings">
                    <tbody>
                        <tr class="number">
                            <th>DPI</th>
                            <td>{{ settings.DPI }}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Sensitivity</th>
                            <td>{{ settings.Sensitivity }}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Zoom Sensitivity</th>
                            <td>{{ settings['Zoom Sensitivity'] }}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Hz</th>
                            <td>{{ settings.Hz }}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Windows Sensitivity</th>
                            <td>{{ settings['Windows Sensitivity'] }}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Raw Input</th>
                            <td>{{ settings['Raw Input'] }}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr class="number">
                            <th>Mouse Acceleration</th>
                            <td>{{ settings['Mouse Acceleration'] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    settings: {
        type: Object,
        required: true
    }
})
</script>
<style scoped>
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
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-left: 40px;
}

.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 1px;
}

.block {
    width: 1020px;
    height: 220px;
    display: flex;
}

.profile-block {
    width: 100%;
    background: #000000;
    border-radius: 10px 10px 10px 10px;
    padding-bottom: 50px;
}

.title {
    display: flex;
    padding: 20px 60px;
    font-size: 24px;
    align-items: center;
}

.title img {
    height: 24px;
    padding-right: 5px;
}</style>