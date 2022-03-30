<template lang="pug">
el-select.m-2.w-20(v-model="size.value" size="large" @change="changeSize($event)" name="select")
  el-option(v-for="item in options" :key="item" :label="item" :value="item")
</template>
<script>
import { ref, reactive, watch, onMounted, defineComponent } from 'vue'
export default defineComponent ({
  emits: ["changeSize"],
  props: ['size'],
  setup(props,  {emit }) {
    const options = [10, 30, 50];
    const value = ref(null);
    const size = reactive({value});
    size.value = props.mode;
    const changeSize = (event) => {
      emit("changeSize", event);
    }
    onMounted( async ()=>{
      watch(
        () => props.size,
        (newVal) => size.value = newVal
      );
    });
    return {
      size,
      options,
      changeSize
    }
  }
})
</script>