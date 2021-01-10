<template>
  <div class="tabs">
    <div class="tabs__controls">
      <ul class="tabs__controls-list">
        <li v-for="tab in tabs" :key="tab.name" class="tabs__controls-item">
          <button class="button" :class="{ 'button--active': tab.isActive }" @click="selectTab(tab)">
            {{ tab.name }}
          </button>
        </li>
      </ul>
    </div>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTabs',
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}
</script>

<style lang="scss">
  .tabs {
    &__controls-list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__controls-item {
      &:not(:last-child) {
        margin-right: 3px;
      }
    }
  }
</style>
