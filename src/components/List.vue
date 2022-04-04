<template lang="pug">
template(v-if="!isCard")
  template.sm_grid-cols-1.md_grid-cols-3.lg_grid-cols-5.p-4.grid.gap-8.pb-20
    Card(v-for="list of list.result" :info="list" :mode="isCard")
template(v-else)
  template.p-4.flex.pb-20.flex-col
    Card(v-for="list of list.result" :info="list" :mode="isCard")
</template>
<script>

import { ElLoading } from 'element-plus'
import { onMounted, ref, reactive, watch } from 'vue';
import { getList } from '../functions/util.js'
export default ({
  props: ['pageSize', 'pageCount', 'isCard'],
  setup(props) {
    let result = ref(null);
    let list = reactive({result})
    onMounted( async ()=>{
      watch(
          () => props.pageSize,
          (newVal) => loading(newVal, props.pageCount)
      );
      watch(
          () => props.pageCount,
          (newVal) => loading(props.pageSize, newVal)
      );
      loading(props.pageSize, props.pageCount);
    });
    const loading = async (size, count) => {
       const showLoading = ElLoading.service({
        lock: true,
        text: 'Loading',
        fullscreen: true,
        background: 'rgba(0, 0, 0, 0.7)',
      });
      const temp = await getList(size, count);
      if(result) {
        showLoading.close();
        list.result = temp;
      };
    }
    return {
      list,
      loading
    }
  },
})
</script>
