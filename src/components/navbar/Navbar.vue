<template>
    <el-menu :default-active="'1'" class="el-menu-demo pt-4 px-20" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <el-icon size="50">
                <HomeFilled />
            </el-icon>
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link flex align-middle items-center">
                    <el-badge :value="shoppingCart.products.length" class="item"
                        :hidden="shoppingCart.products.length > 0 ? false : true">
                        <el-icon size="50">
                            <ShoppingCart />
                        </el-icon>
                    </el-badge>
                    <el-icon v-if="shoppingCart.products.length > 0" class="el-icon--right">
                        <ArrowDown />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu style="width: 250px; padding: 8px;">
                        <el-dropdown-item v-for="(item, index) in shoppingCart.products" :key="index" >
                            <div class="flex justify-between items-center w-full">
                                <div class="flex-col w-1/4">
                                    <el-avatar :size="40" >
                                        <img :src="item.url" />
                                    </el-avatar>
                                </div>
                                <div class="flex justify-evenly w-3/5">
                                    <p class="text-lg">{{ item.name }} </p>
                                    <p class="text-lg"> {{ `$ ${item.price}` }}</p>
                                </div>
                                <div class="w-1/12">
                                    <el-icon color="red" size="20" class="pt-2 text-right">
                                        <CloseBold />
                                    </el-icon>
                                </div>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
// icons
import { HomeFilled, ShoppingCart, ArrowDown, CloseBold } from "@element-plus/icons-vue";
// Store
import { cardStore } from "../../store/store";

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

// Store
const shoppingCart = cardStore();

</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>