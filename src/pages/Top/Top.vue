<template>
  <div class="top">
      <div class="glow-bg">
        <div class="glow"></div>
      </div>
  </div>
  <logo/>
  <scene-nav>
    <scene-nav-link name="search">
      <template v-slot:text>
        Search
      </template>
      <template v-slot:icon>
        <icon icon="search"/>
      </template>
    </scene-nav-link>
    <scene-nav-link name="memos">
      <template v-slot:text>
        Memos
      </template>
      <template v-slot:icon>
        <icon icon="book"/>
      </template>
    </scene-nav-link>
    <scene-nav-link name="my_page">
      <template v-slot:text>
        My Page
      </template>
      <template v-slot:icon>
        <icon icon="user"/>
      </template>
    </scene-nav-link>
    <scene-nav-link name="login">
      <template v-slot:text>
        Login
      </template>
      <template v-slot:icon>
        <icon icon="sign-in-alt"/>
      </template>
    </scene-nav-link>
    <scene-nav-link name="register">
      <template v-slot:text>
        New User
      </template>
      <template v-slot:icon>
        <icon icon="user-plus"/>
      </template>
    </scene-nav-link>
    <scene-nav-link name="settings">
      <template v-slot:text>
        Settings
      </template>
      <template v-slot:icon>
        <icon icon="cog"/>
      </template>
    </scene-nav-link>
  </scene-nav>
</template>

<script>
import Logo from "../../components/Logo/Logo";
import SceneNav from "../../components/SceneNav/SceneNav";
import SceneNavLink from "@/components/SceneNav/SceneNavLink";
export default {
  name: "Top",
  components: {SceneNavLink, SceneNav, Logo}
}
</script>

<style src="./Top.scss" lang="scss" scoped/>