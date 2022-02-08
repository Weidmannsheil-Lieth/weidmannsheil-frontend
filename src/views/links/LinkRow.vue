<template>
  <div class="link-row">
    <div
      class="link-col"
      v-for="pos in 14"
      :key="pos"
    >
      <a class="item-col-image" :href="'/weiterleitung/' + pos" rel="nofollow">
        <img :src="'/assets/links/' + pos + '.jpg'" alt=""/>
      </a>
    </div>
  </div>
</template>