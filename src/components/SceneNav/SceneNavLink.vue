<template>
  <li class="scene_nav_item">
    <button
      class="scene_nav_button"
      @click="this.$parent.scene = name"
      :class="{ 'o-active': this.$parent.scene === name }"
    >
      <span class="icon" v-if="this.$parent.scene === name">
        <slot></slot>
      </span>
      <span class="text" v-else>
        <slot></slot>
      </span>
    </button>
  </li>
</template>

<script>
export default {
  name: "SceneNavLink",
  props: ["name"]
}
</script>

<style src="./SceneNav.scss" lang="scss" scoped />