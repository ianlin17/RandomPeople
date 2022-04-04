<template lang="pug">
transition(name="fade" appear)
  div(@click="open()" v-if="!mode")
    el-card.w-32.h-48.text-center.mt-0.mb-0.mx-auto.bg-indigo-200.h-full.hover_cursor-pointer.hover_scale-110.hover_animate-pulse(shadow="hover")
      img.mt-0.mb-0.mx-auto.mb-3(:src="info.picture.medium")
      span {{info.name.first}}
  div(@click="open()" v-else)
    el-card.w-full.h-48.text-center.mt-1.mb-1.bg-indigo-200.h-full.hover_cursor-pointer.hover_scale-110.hover_animate-pulse(shadow="hover")
      img.mt-0.mb-0.mx-auto.mb-3(:src="info.picture.medium")
      span {{info.name.first}}
template(v-if="centerDialogVisible")
  el-dialog(v-model="centerDialogVisible" :title="info.name.first + ' '+ info.name.last" width="30%" :show-close="false" center)
    img.mt-0.mb-0.mx-auto(:src="info.picture.large")
    template#footer
      span.dialog-footer
        el-button(@click="centerDialogVisible=false") Cancel
</template>

<script>
import {ref } from 'vue';
export default ({
  props: ['info', 'mode'],
  setup() {
    const centerDialogVisible = ref(false)
    const open = () => centerDialogVisible.value = true;
    return {
      centerDialogVisible,
      open
    }
  },
})
</script>

<style>
  .el-dialog__header {
    margin-right: 0 !important;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave-from{
    opacity: 1;
  }
</style>