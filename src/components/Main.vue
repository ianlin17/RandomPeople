<template lang="pug">
.w-screen.h-screen
  template.h-16.fixed.w-full.bg-gray-600.flex.items-center.justify-end
    Switch(:mode="mode.initMode" @changeMode="changeMode")
    Select(:size="size.pageSize" @changeSize="changeSize")
  List.pt-20(:pageCount="page.pageCount" :pageSize="size.pageSize" :isCard="mode.initMode")
  template.flex.justify-center.bottom-2.right-50p.left-50p.fixed
    Pagi(:count="page.pageCount" :size="size.pageSize" @changeCount="changeCount")
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { getItem, setItem } from '../functions/util.js'
export default {
  setup() {
    const pageCount = ref(null);
    const pageSize = ref(null);
    const initMode = ref(null);
    const page = reactive({ pageCount });
    const size = reactive({ pageSize });
    const mode = reactive({ initMode });
    const hasCount = getItem('count');
    const hasSize = getItem('size');
    const hasMode = getItem('mode');
    onMounted(() => {
      page.pageCount = (hasCount !== null) ? hasCount*1 : 1;
      size.pageSize = (hasSize !==null) ? hasSize : 30;
      mode.initMode = (hasMode !==null) ? JSON.parse(hasMode) : false;
    })
    const changeMode = (e) => {
      mode.initMode = e;
      setItem('mode',  e);
    };
    const changeSize = (e) => {
      size.pageSize = e;
      setItem('size',  e);
    };
    const changeCount = (e) => {
      page.pageCount = e;
      setItem('count',  e);
    };
    return {
      page,
      size,
      mode,
      changeMode,
      changeCount,
      changeSize
    }
  }
}
</script>