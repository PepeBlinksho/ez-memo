<template>
  <nav class="scene_nav">
    <ol class="scene_nav_list">
      <li class="scene_nav_item" v-for="(params, index) in maxScene">
        <button class="scene_nav_button" @click="scene = index" :class="{ 'active': scene === index }"></button>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "SceneNav",
  data() {
    return {
      scene: 0,
      maxScene: 8,
    };
  },
  created() {
    // setInterval(() => {
    //   this.scene = this.getRandom(1, 7)
    // }, 2000)
  },
  mounted() {
    setTimeout(() => {
      this.scene = this.maxScene - 3;
    }, 1000);
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },
  },
};
</script>

<style src="./SceneNav.scss" lang="scss" scoped />
