<template>
  <div class="top">
    <div class="glow-bg">
      <div class="glow"></div>
    </div>
  </div>
  <logo />
</template>

<script>
import Logo from "../../components/Logo/Logo";
export default {
  name: "Top",
  components: {Logo}
}
</script>

<style src="./Top.scss" lang="scss" scoped />