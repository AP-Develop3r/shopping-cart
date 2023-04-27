<template>
  <el-row justify="center">
      <el-col v-for="(item, index) in products" :key="index" :span="8" style="padding: 10px">
        <div class="grid-content ep-bg-purple" >
      <Card :data="item"/>
        </div>
    </el-col>
  </el-row>

</template>
<script setup lang="ts">
// Vue
import {  ref } from "vue";
// interface
import { card } from "./card/interface/card";
// Components
import Card from "./card/Card.vue"


const products = ref<card[]>([
  {name: "Mouser", price: 120, url: new URL("../assets/mouse.jpg", import.meta.url).href},
  {name: "Earphones", price: 140, url: new URL("../assets/audifonos.jpg", import.meta.url).href},
  {name: "Printer", price: 80, url: new URL("../assets/hp.jpg", import.meta.url).href},
  {name: "Laptop", price: 400, url: new URL("../assets/laptop.jpg", import.meta.url).href},
  {name: "Camera", price: 70, url: new URL("../assets/web-cam.jpg", import.meta.url).href},
  {name:" Keyboard", price: 180, url: new URL("../assets/keyboard.jpg", import.meta.url).href},
])

</script>
<style scoped></style>
