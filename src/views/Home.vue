<template>
  <div class="home">
    <cat-list />
  </div>
</template>

<script>

import CatList from '@/components/Category/CatList.vue'

export default {
  name: 'Home',
  components: {
    CatList
  }
}
</script>
