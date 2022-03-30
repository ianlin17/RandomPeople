<template lang="pug">
transition(name="fade" appear)
  div(@click="open()" v-if="!show.mode")
    el-card.w-32.h-48.text-center.mt-0.mb-0.mx-auto.bg-indigo-200.h-full(shadow="hover")
      img.mt-0.mb-0.mx-auto.mb-3(:src="info.profile.picture.medium")
      span {{info.profile.name.first}}
  div(@click="open()" v-else)
    el-card.w-full.h-48.text-center.mt-1.mb-1.bg-indigo-200.h-full(shadow="hover")
      img.mt-0.mb-0.mx-auto.mb-3(:src="info.profile.picture.medium")
      span {{info.profile.name.first}}
template(v-if="centerDialogVisible")
  el-dialog(v-model="centerDialogVisible" :title="info.profile.name.first + ' '+ info.profile.name.last" width="30%" :show-close="false" center)
    img.mt-0.mb-0.mx-auto(:src="info.profile.picture.large")
    template#footer
      span.dialog-footer
        el-button(@click="centerDialogVisible=false") Cancel
</template>

<script>
import {watch, ref, reactive } from 'vue';
export default ({
  props: ['info', 'mode'],
  setup(props) {
    const profile = ref('');
    const centerDialogVisible = ref(false)
    const info = reactive({profile});
    const mode = ref(null);
    const show = reactive({mode});
    profile.value = props.info;
    info.profile = props.info;
    show.mode = props.mode;
    watch(() => props.info,
      (newVal) => {
        profile.value = newVal;
        info.profile = newVal;
      }
    );
    watch(
      () => props.mode,
      (newVal) => show.mode = newVal
    );
    const open = () => centerDialogVisible.value = true;
    return {
      info,
      centerDialogVisible,
      show,
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