<template>
<div class="p-10">
    <div v-show="state.loading" class="text-center text-xl" style="width:960px">Now loading...</div>
    <div v-show="!state.loading" class="lg:flex" style="width: 960px">
      <div class="h-96 w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-top.jpg')" title="Mountain">
      </div>
      <div class="pl-24 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="font-bold text-xl mb-2">{{ state.items.name }}</div>
          <p class="text-base py-12">{{ state.items.description }}</p>
          <p class="text-base py-12">{{ `¥ ${state.items.price}` }}</p>
          <button class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
            欲しいものリストに追加
          </button>
          <button class="ml-12 bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 受け取ったpropsを表示
// ボタンコンポーネントは後で作る
import axios from "axios";
import { defineComponent, reactive } from "vue";
// import router from '../router/index.js'


export default defineComponent({
  name: 'detail',
  setup() {
    const state = reactive({
      items: {},
      loading: true,
    })
    
    // どうやってたら$routeが参照できるようになるのかわからなかったので妥協案
    // 本当はthis.$route.params['id']で取りたいのにできないよぉぉぉ！
    const url = new URL(window.location)
    const id = url.hash.replace('#/ItemDetail/','')
    // API
    async function getData() {
      await axios.get("http://localhost:3000/items/",{ params: {id}}).then(function (response) {
        state.items = response.data[0]
        state.loading = false
      }).catch(function (error) {
        console.log(error)
      })
    }

    getData();

    return { state };
  },
});
</script>
