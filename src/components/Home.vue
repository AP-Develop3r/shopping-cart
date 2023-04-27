<template>
  <el-row justify="center">
      <el-col v-for="(item, index) in 8" :key="index" :span="6" style="padding: 10px">
        <div class="grid-content ep-bg-purple" >
      <Card />
        </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import Card from "./card/Card.vue"

</script>
<style scoped></style>
