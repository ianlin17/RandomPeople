<template lang="pug">
el-pagination(background layout="prev, pager, next" :page-count="pages.pageCount" :default-page-size="size.sizeValue" :page-size="size.sizeValue" :current-page="count.value" @current-change="changeCount($event)")
</template>
<script>
import { ref, reactive, watch, onMounted, defineComponent } from 'vue'
export default defineComponent ({
  emits: ["changeCount"],
  props: ['count', 'size'],
  setup(props,  {emit }) {
    const options = [10, 30, 50];
    const value = ref(null);
    const pageCount = ref(null)
    const pages = reactive({pageCount})
    const count = reactive({value});
    const sizeValue = ref(null);
    const size = reactive({sizeValue});
    onMounted(() => {
      count.value = props.mode;
      size.sizeValue = props.size
      pages.pageCount = Math.ceil(3010/size.sizeValue);
    })

    const changeCount = (event) => {
      emit("changeCount", event);
    }
    onMounted( async ()=>{
      watch(
        () => props.count,
        (newVal) => count.value = newVal
      );
       watch(
        () => props.size,
        (newVal) =>{ size.sizeValue = newVal;
          pages.pageCount = Math.ceil(3010/size.sizeValue);
        }
      );
    });
    return {
      count,
      pages,
      pageCount,
      size,
      options,
      sizeValue,
      changeCount
    }
  }
})
</script>