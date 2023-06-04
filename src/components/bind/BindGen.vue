<template>
    <div class="content">
        <h1 class="title">Генератор биндов</h1>

        <div class="fields">
            <input type="text" v-model="command" placeholder="Введите команду" class="enter-field">
            <select v-model="key" class="select">
                <option value="" class="select-field">Выберите клавишу</option>
                <option v-for="key in keys" :value="key">{{ key }}</option>
            </select>
            <div class="btn-gen">
                <button @click="generateBind" class="gen">Сгенерировать</button>
            </div>
        </div>

        <p class="bind" v-if="bind">{{ bind }}</p>

        <div class="allowed-binds">
            <h3 class="sub-title">Популярные и полезные команды:</h3>

            <div class="commands">
                <p class="command"><b>r_cleardecals</b> - очистка карты от декалей, такие как кровь и следы от пуль.</p>
                <p class="">- Если вы хотите удалять декали при каждом нажатии клавиши Shift, +speed этот привязывающий код
                    поможет
                    вам. (+speed; r_cleardecals) </p>
            </div>

            <div class="commands">
                <p class="command"><b>toggle voice_scale 0.1 1</b> - регулировка громкости голосового чата.</p>
                <p class="">- Вместо отключения голосовой связи, эта привязка уменьшит громкость голоса ваших товарищей по
                    команде, чтобы вы все еще могли их слышать, но их голоса не будут очень громкими. </p>
            </div>

            <div class="commands">
                <p class="command"><b>noclip</b> - для быстрыго перемещения по карте во время тренировки.</p>
                <p class="">- Вы можете написать "sv_cheats 1; noclip", чтобы включать режим полёта, без ввода команда sv_cheats 1. </p>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const command = ref('');
const key = ref('');
const bind = ref('');

const keys = [
    // Буквы
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'Space', 'Enter', 'Tab', 'Shift', 'Ctrl', 'Alt', 'CapsLock', 'Escape',
    'Backspace', 'Insert', 'Delete', 'Home', 'End', 'PageUp', 'PageDown',
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Mouse1', 'Mouse2', 'Mouse3', 'Mouse4', 'Mouse5',
    '`', '-', '=', '[', ']', ';', "'", ',', '.', '/',
];

function generateBind() {
    if (key.value && command.value) {
        bind.value = `bind ${key.value} "${command.value}"`;
    }
}
</script>
<style scoped>
.commands {
    padding-left: 5px;
}
.command {
    padding: 10px 0;
    font-size: 16px;
}

.allowed-binds {
    padding: 50px;
}

.title {
    font-size: 32px;
    padding-bottom: 30px;
}

.content {
    width: 1000px;
    background-color: #0000007b;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 0px 4px 40px rgba(96, 0, 252, 0.24);
    border: 1px solid #000000;
    border-radius: 10px;
}

.bind {
    margin-top: 30px;
    background-color: #0000007b;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
}

.gen {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #fff;
    background-color: #0000007b;
    border: 1px solid #220551;
    padding: 10px 15px;
    border-radius: 5px;
    transition: 0.3s;
}

.gen:hover {
    background-color: #220551;
    transform: scale(1.1);
}

.fields {
    display: flex;
    align-items: center;
}

.enter-field {
    background-color: #0000007b;
    height: 50px;
    border-radius: 5px;
    font-size: 16px;
    color: #666666;
    padding: 12px 15px;
    font-family: 'Montserrat', sans-serif;
    white-space: break-spaces;
    display: block;
    margin: 0;
    border: none;
    margin-top: 5px;
    margin-bottom: 5px;
}

.enter-field:focus-visible {
    color: #fff;
    outline: none;
}

.select {
    background-color: #0000007b;
    border-radius: 5px;
    color: #666666;
    border: none;
    height: 50px;
    font-size: 16px;
    padding: 12px 15px;
    font-family: 'Montserrat', sans-serif;
    margin-left: 10px;
    margin-right: 15px;
}

.select option {
    background-color: #000;
    color: #fff;
    padding: 0.5rem;
}

.select:focus-visible {
    outline: none;
}
</style>
