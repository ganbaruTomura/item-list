<template>
  <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-10 xl:grid-cols-4">
    <div v-for="item of state.items" :key="item.id">
      <Card :data="item" />
    </div>
  </div>
</template>

<script>
// リストのスタイルを設定するコンポーネント
// API通信をするコンポーネント
// Cardコンポーネント作らなくてもよかったが、練習になると思ってわざとやってます

import Card from '@/components/Card.vue'
import axios from "axios";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: 'ItemList',
  components: {
    Card,
  },
  setup() {
    const state = reactive({
      items: {},
    });

    // API
    async function getData() {
      await axios.get("http://localhost:3000/items").then(function (response) {
        state.items = response.data
      }).catch(function (error) {
        console.log(error)
      })
    }

    getData();

    return { state };
  },
});
</script>
