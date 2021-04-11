<template lang="pug">
hello-world(:msg="$t('message.hello')")
</template>
  
<script lang="ts">
import { ref, defineComponent } from 'vue';
import HelloWorld from '/@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>
  
<style scoped lang="stylus"></style>
  