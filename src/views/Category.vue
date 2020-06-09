<template>
  <div class="category">
    <cat-list />
  </div>
</template>

<script>

import CatList from '@/components/Category/CatList.vue'

export default {
  name: 'category',
  components: {
    CatList
  }
}
</script>
