<template>
  <div class="top">
    <div class="glow-bg">
      <div class="glow"></div>
    </div>
  </div>
  <logo />
  <scene-nav />
</template>

<script>
import Logo from "../../components/Logo/Logo";
import SceneNav from "../../components/SceneNav/SceneNav"
export default {
  name: "Top",
  components: {Logo, SceneNav}
}
</script>

<style src="./Top.scss" lang="scss" scoped />