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
  },
  methods: {
    changeScene(scene) {
      this.scene = scene
    }
  },
  watch: {
    scene: function (newScene, oldScene) {
      this.$emit('sceneChanged', newScene)
    }
  },
}
</script>

<style src="./SceneNav.scss" lang="scss" scoped />