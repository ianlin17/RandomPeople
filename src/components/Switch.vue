<template lang="pug">
el-switch(v-model="mode.value" @change="changeMode($event)" active-text="List" inactive-text="Card" active-color="#13ce66" inactive-color="#13ce66")
</template>
<script>
import { ref, reactive, watch, onMounted, defineComponent } from 'vue'
export default defineComponent ({
  emits: ["changeMode"],
  props: ['mode'],
  setup(props,  {emit }) {
    const value = ref(null);
    const mode = reactive({value});
    mode.value = props.mode;
    const changeMode = (event) => {
      emit("changeMode", event);
    }
    onMounted( async ()=>{
      watch(
        () => props.mode,
        (newVal) => mode.value = newVal
      );
    });
    return {
      mode,
      changeMode
    }
  }
})
</script>