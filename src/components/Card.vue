<template>
<button @click="change(data.id)" >
  <div class="Card text-left">
    <div class="max-w-xs rounded-md bg-blue-50 overflow-hidden shadow-xl my-1">
      <img class="object-fill w-40 h-40" src="https://tailwindcss.com/img/card-top.jpg">
      <div class="px-2 py-0.5">
        <div class="text-lg mb-2">
          {{ data.name }}
        </div>
        <p class="text-grey-darker lg:text-red-500">
          {{ `¥ ${data.price}` }}
        </p>
      </div>
    </div>
  </div>
</button>
</template>

<script>
// 受け取ったpropsを表示

import { defineComponent } from "@vue/runtime-core"
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Card',
  props: {
    data: Object,
  },
  setup(){
    const router = useRouter()

    const change = (id) => {
      router.push(`/itemDetail/${id}`)
    }

    return { change }

  }
});
</script>
