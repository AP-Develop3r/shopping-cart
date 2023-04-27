<template>
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">
            <el-icon size="50">
                <HomeFilled />
            </el-icon></el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1"><el-icon size="50">
                <ShoppingCart />
            </el-icon></el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { HomeFilled, ShoppingCart } from "@element-plus/icons-vue";

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>