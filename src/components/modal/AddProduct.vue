<template>
   <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
  <el-input v-model="input" placeholder="Name" />
  <el-input v-model="input" placeholder="Price" />
  <el-input v-model="input" placeholder="Url" />
  <el-input v-model="input" placeholder="Description" />

  
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
// Vue
import { onMounted, ref, defineEmits } from "vue";

// Props
const props = defineProps<{
    products: product;
}>();
// Emit
const emit = defineEmits(['handleClose'])


const handleClose = (done: () => void) => {
    emit('handleClose')
    done()
}


const dialogVisible = ref<boolean>(false)
onMounted(() => {
    dialogVisible.value = true
})
</script>

<style>

</style>