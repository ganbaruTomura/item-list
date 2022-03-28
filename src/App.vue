<template>
  <div class="flex justify-center bg-gray-200 h-screen">
    <div class="container-lg mt-32">
      <div style="width:960px">
        <div class="text-2xl w-full">商品一覧</div>
        トップページ > <router-link to="/">商品一覧</router-link>
      </div>
      <div class="justify-center flex items-center"  style="width: 960px">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>