<template>
    <el-row justify="center">
        <el-card :body-style="{ padding: '20px' }" >
            <img :src="props.data.url"
                class="image w-64 h-64 p-4" />
            <el-row class="row-bg my-2" justify="center">
                <span>{{ props.data.name }}</span>
            </el-row>
            <el-row v-s="props.data.description " class="bg-gray-50 " justify="center">
                <span class="relative">{{ props.data.description }}</span>
            </el-row>
            <el-row class="flex justify-between m-4" justify="space-between">
                <div>$ {{ props.data.price }}</div>
                <el-icon class="cursor-pointer" @click="addProduct(props.data)">
                    <Plus />
                </el-icon>
            </el-row>
        </el-card>
    </el-row>
</template>

<script lang="ts" setup>
// Vue
import { defineProps } from "vue";
// Interface
import { product } from "./interface/card";
// Icons
import { Plus } from "@element-plus/icons-vue";
// Store
import { cardStore } from "../../store/store";


// Props
const props = defineProps<{
    data: product;
}>();

// Store
const shoppingCart = cardStore();

const addProduct = (item: product): void => {
    shoppingCart.setProduct(item)
}


</script>
