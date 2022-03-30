<template lang="pug">
template(v-if="!show.mode")
  template.sm_grid-cols-1.md_grid-cols-3.lg_grid-cols-5.p-4.grid.gap-2.pb-20
    Card(v-for="list of list.result" :info="list" :mode="show.mode")
template(v-else)
  template.p-4.flex.pb-20.flex-col
    Card(v-for="list of list.result" :info="list" :mode="show.mode")
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
    const mode = ref(null);
    const show = reactive({mode});
    show.mode = props.isCard;
    onMounted( async ()=>{
      watch(
          () => props.pageSize,
          (newVal) => loading(newVal, props.pageCount)
      );
      watch(
          () => props.pageCount,
          (newVal) => loading(props.pageSize, newVal)
      );
      watch(
          () => props.isCard,
          (newVal) => show.mode = newVal
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
      result = await getList(size, count);
      if(result) {
        showLoading.close();
        list.result = result;
      };
    }
    return {
      result,
      list,
      show,
      loading
    }
  },
})
</script>
