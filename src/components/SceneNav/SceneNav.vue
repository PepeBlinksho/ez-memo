<template>
  <nav class="scene_nav">
    <ol class="scene_nav_list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "SceneNav",
  data() {
    return {
      scene: ''
    }
  },
  created() {
    setTimeout(() => {
      this.scene = 'register'
    }, 1000)
  }
}
</script>

<style src="./SceneNav.scss" lang="scss" scoped />