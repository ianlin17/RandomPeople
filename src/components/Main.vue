<template lang="pug">
template.h-16.fixed.w-full.bg-gray-600.flex.items-center.justify-end.z-50
  Switch(:mode="initMode" @changeMode="changeMode")
  Select(:size="pageSize" @changeSize="changeSize")
List.pt-20(:pageCount="pageCount" :pageSize="pageSize" :isCard="initMode")
template.flex.justify-center.bottom-2.right-50p.left-50p.fixed
  Pagi(:count="pageCount" :size="pageSize" @changeCount="changeCount")
</template>

<script>
import { ref, onMounted } from 'vue'
import { getItem, setItem } from '../functions/util.js'
export default {
  setup() {
    let pageCount = ref(0);
    let pageSize = ref(0);
    let initMode = ref(false);
    const hasCount = getItem('count');
    const hasSize = getItem('size');
    const hasMode = getItem('mode');
    onMounted(() => {
      pageCount.value = (hasCount !== null) ? hasCount*1 : 1;
      pageSize.value = (hasSize !==null) ? hasSize*1 : 30;
      initMode.value = (hasMode !==null) ? JSON.parse(hasMode) : false;
    })
    const changeMode = (e) => {
      initMode.value = e;
      setItem('mode',  e);
    };
    const changeSize = (e) => {
      pageSize.value = e;
      setItem('size',  e);
    };
    const changeCount = (e) => {
      pageCount.value = e;
      setItem('count',  e);
    };
    return {
      pageCount,
      pageSize,
      initMode,
      changeMode,
      changeCount,
      changeSize
    }
  }
}
</script>