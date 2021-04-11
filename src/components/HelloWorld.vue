<template lang="pug">
h1
  | {{ msg }}
el-button(type="primary", @click="count++")
  | count is: {{ count }}
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue';
  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        required: true,
      },
    },
    setup: () => {
      const count = ref(0);
      return { count };
    },
  });
</script>

<style scoped lang="stylus"></style>
