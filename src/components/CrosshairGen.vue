<template>
    <div>
      <h2>Генератор прицела CS:GO</h2>
      <div>
        <label for="thickness">Толщина прицела:</label>
        <input type="number" id="thickness" v-model="thickness" />
      </div>
      <div>
        <label for="gap">Пространство внутри прицела:</label>
        <input type="number" id="gap" v-model="gap" />
      </div>
      <div>
        <label for="size">Размер прицела:</label>
        <input type="number" id="size" v-model="size" />
      </div>
      <div>
        <label for="alpha">Прозрачность прицела (0-255):</label>
        <input type="number" id="alpha" v-model="alpha" min="0" max="255" />
      </div>
      <button @click="generateCrosshairCode">Сгенерировать код прицела</button>
      <div v-if="crosshairCode">
        <h3>Код прицела:</h3>
        <pre>{{ crosshairCode }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const thickness = ref(1);
  const gap = ref(2);
  const size = ref(3);
  const alpha = ref(200);
  const crosshairCode = ref('');
  
  const generateCrosshairCode = () => {
    crosshairCode.value = `cl_crosshairthickness ${thickness.value}; cl_crosshairgap ${gap.value}; cl_crosshairsize ${size.value}; cl_crosshairalpha ${alpha.value}`;
  };
  </script>
  