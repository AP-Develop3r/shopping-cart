<template>
  <el-row class="flex justify-center my-4">
    <el-button type="primary" plain @click="dialogVisible = true">New Product</el-button>
  </el-row>
  <el-row justify="center">
         <el-col :span="19" class="bg-gray-100 p-10 mx-2">
      <el-row>
        <el-col v-for="(item, index) in products" :key="index" :span="8" style="padding: 10px">
          <div class="grid-content ep-bg-purple">
            
            <Card :data="item" />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4" class="bg-gray-200 p-10 mx-2">
      <el-badge :is-dot="shoppingCart.products.length > 0 ? true : false" class="item w-full">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
              <p class="text-center uppercase">Purchase order</p>
          </div>
        </template>
        <div v-for="(item, index) in shoppingCart.products" :key="index" :icon="Plus">
          <div class="flex justify-between items-center w-full">
            <div class="flex-col w-1/4">
              <el-avatar :size="40">
                <img :src="item.url" />
              </el-avatar>
            </div>
            <div class="flex justify-evenly w-3/5">
              <p class="text-lg">{{ item.name }} </p>
              <p class="text-lg"> {{ `$ ${item.price}` }}</p>
            </div>
            <div class="w-1/12">
              <el-icon color="red" size="20" class="pt-2 text-right cursor-pointer" @click="deleteProduct(index)">
                <CloseBold />
              </el-icon>
            </div>
          </div>


        </div>
        <div class="flex  bg-green-200 border-spacing-5 rounded m-2 px-4">
          <div class="flex-col uppercase">
            <p>{{`Total: $ ${shoppingCart.total} `}}</p>
            <p>{{`Tax: $ ${shoppingCart.tax} `}}</p>
          </div>

        </div>
      </el-card>
    </el-badge>
    </el-col>
    <NewProduct  v-if="dialogVisible" @handleClose="dialogVisible=false" :products="products"/>
  </el-row>
</template>
<script setup lang="ts">
// Vue
import { ref } from "vue";
import type { Ref } from 'vue'
// Store
import { cardStore } from "../store/store";
// icons
import { HomeFilled, ShoppingCart, ArrowDown, CloseBold } from "@element-plus/icons-vue";
// interface
import { product } from "./card/interface/card";
// Components
import Card from "./card/Card.vue";
import NewProduct from "./modal/AddProduct.vue";




// Store
const shoppingCart = cardStore();

// List of products
const products = ref([
  { name: "Mouser", price: 120, url: new URL("../assets/mouse.jpg", import.meta.url).href },
  { name: "Earphones", price: 140, url: new URL("../assets/audifonos.jpg", import.meta.url).href, description: "Powerful and comfortable headphones." },
  { name: "Printer", price: 80, url: new URL("../assets/hp.jpg", import.meta.url).href },
  { name: "Laptop", price: 400, url: new URL("../assets/laptop.jpg", import.meta.url).href },
  { name: "Camera", price: 70, url: new URL("../assets/web-cam.jpg", import.meta.url).href },
  { name: "Keyboard", price: 180, url: new URL("../assets/keyboard.jpg", import.meta.url).href },
]) as Ref<product[]>

// Delete Product
const deleteProduct = (key: Number): void => {
  shoppingCart.deleteProduct(key)
}

const dialogVisible = ref<boolean>(false)


</script>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}</style>
