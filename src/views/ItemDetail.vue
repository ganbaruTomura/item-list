<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex xl:mt-12">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-top.jpg')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{{ state.items.name}}</div>
      <p class="text-gray-700 text-base">{{ state.items.description }}</p>
    </div>
  </div>
</div>
</template>

<script>
// 受け取ったpropsを表示
import axios from "axios";
import { defineComponent, reactive } from "vue";
// import router from '../router/index.js'

export default defineComponent({
  name: 'detail',
  setup() {
    const state = reactive({
      items: {},
    })
    
    // どうやってたら$routeが参照できるようになるのかわからなかったので妥協案
    // 本当はthis.$route.params['id']で取りたいのにできないよぉぉぉ！
    const url = new URL(window.location)
    const id = url.hash.replace('#/ItemDetail/','')
    // API
    async function getData() {
      await axios.get("http://localhost:3000/items/",{ params: {id}}).then(function (response) {
        state.items = response.data[0]
      }).catch(function (error) {
        console.log(error)
      })
    }

    getData();

    return { state };
  },
});
</script>
