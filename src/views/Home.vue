<template>
  <div>
    {{ state.items }}
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      items: {},
    });

    // API
    async function getData() {
        await axios.get("http://localhost:3000/items").then(function (response) {
    state.items = response.data
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }

    getData();

    return { state };
  },
});
</script>
