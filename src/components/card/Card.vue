<template>
    <el-row justify="center">
        <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button text class="button"><el-icon><Plus /></el-icon></el-button>
                </div>
            </div>
        </el-card>

    </el-row>
</template>

<script lang="ts" setup>
// Interface
import { card } from "./interface/card";
// Icons
import { Plus } from "@element-plus/icons-vue";
</script>

<style></style>