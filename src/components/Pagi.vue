<template lang="pug">
el-pagination(background layout="prev, pager, next" :page-count="pageCount.value" :default-page-size="size" :page-size="size" @current-change="changeCount($event)")
</template>
<script>
import { ref, watch, onMounted, defineComponent } from 'vue'
export default defineComponent ({
  emits: ["changeCount"],
  props: ['count', 'size'],
  setup(props,  {emit }) {
    const options = [10, 30, 50];
    let pageCount = ref(0)
    const changeCount = (event) => {
      emit("changeCount", event);
    }
    onMounted( async ()=>{
       watch(
        () => props.size,
        (newVal) =>{
          pageCount.value = Math.ceil(3010/newVal);
        }
      );
    });
    return {
      pageCount,
      options,
      changeCount
    }
  }
})
</script>