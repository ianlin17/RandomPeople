<template lang="pug">
el-pagination(background layout="prev, pager, next" :total="3010" :page-sizes="options" :default-current-page="count.value" :current-page="count.value" @current-change="changeCount($event)")
</template>
<script>
import { ref, reactive, watch, onMounted, defineComponent } from 'vue'
export default defineComponent ({
  emits: ["changeCount"],
  props: ['count'],
  setup(props,  {emit }) {
    const options = [10, 30, 50];
    const value = ref(null);
    const count = reactive({value});
    count.value = props.mode;
    const changeCount = (event) => {
      emit("changeCount", event);
    }
    onMounted( async ()=>{
      watch(
        () => props.count,
        (newVal) => count.value = newVal
      );
    });
    return {
      count,
      options,
      changeCount
    }
  }
})
</script>