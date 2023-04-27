<template>
  <div>
      <div class="common-layout">
        <el-container>
          <el-header>
            <Navbar />
          </el-header>
          <el-main> <router-view /></el-main>
        </el-container>
      </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/navbar/Navbar.vue"

</script>
<style scoped></style>
