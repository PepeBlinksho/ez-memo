<template>
  <div class="top">
      <div class="glow-bg">
        <div class="glow"></div>
      </div>
    <logo :class="{'logo_pos': positionChange}" />
    <div class="search form" :style="{'opacity': positionChange ? 1 : 0}">
      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control">
        </div>
      </div>
    </div>

    <scene-nav :class="{'nav_pos': positionChange}" v-on:scene-changed="sceneChanged($event)">
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
      <scene-nav-link name="login" data-bs-toggle="modal" data-bs-target="#login">
        <template v-slot:text>
          Login
        </template>
        <template v-slot:icon>
          <icon icon="sign-in-alt"/>
        </template>
      </scene-nav-link>
      <scene-nav-link name="register" data-bs-toggle="modal" data-bs-target="#newUserModal">
        <template v-slot:text>
          New User
        </template>
        <template v-slot:icon>
          <icon icon="user-plus"/>
        </template>
      </scene-nav-link>
      <scene-nav-link name="settings" data-bs-toggle="modal" data-bs-target="#settingsModal">
        <template v-slot:text>
          Settings
        </template>
        <template v-slot:icon>
          <icon icon="cog"/>
        </template>
      </scene-nav-link>
    </scene-nav>

    <!-- New User Modal -->
    <div class="modal fade" id="newUserModal" tabindex="-1" aria-labelledby="newUserModal" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create User</h5>
          </div>
          <div class="modal-body">
            <div class="form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
              </div>
              <div class="mb-3">
                <label for="re-password" class="form-label">Re-Password</label>
                <input type="password" class="form-control" id="re-password">
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-primary">
              <div class="corner left_top"></div>
              <div class="corner left_bottom"></div>
              <div class="corner right_top"></div>
              <div class="corner right_bottom"></div>
              Create User
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <div class="corner left_top"></div>
              <div class="corner left_bottom"></div>
              <div class="corner right_top"></div>
              <div class="corner right_bottom"></div>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Settings Modal -->
    <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="newUserModal" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="settingsModalLabel">Settings</h5>
          </div>
          <div class="modal-body">
            <div class="form">
              <div class="mb-3">
                <label for="settings-name" class="form-label">Name</label>
                <input type="text" class="form-control" id="settings-name">
              </div>
              <div class="mb-3">
                <label for="settings-password" class="form-label">Password</label>
                <input type="password" class="form-control" id="settings-password">
              </div>
              <div class="mb-3">
                <label for="settings-new-password" class="form-label">New Password</label>
                <input type="password" class="form-control" id="settings-new-password">
              </div>
              <div class="mb-3">
                <label for="re-new-password" class="form-label">Re-Password</label>
                <input type="password" class="form-control" id="re-new-password">
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-primary">
              <div class="corner left_top"></div>
              <div class="corner left_bottom"></div>
              <div class="corner right_top"></div>
              <div class="corner right_bottom"></div>
              Save
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <div class="corner left_top"></div>
              <div class="corner left_bottom"></div>
              <div class="corner right_top"></div>
              <div class="corner right_bottom"></div>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Login Modal -->
    <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Create User</h5>
          </div>
          <div class="modal-body">
            <div class="form">
              <div class="mb-3">
                <label for="login-email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="login-email">
              </div>
              <div class="mb-3">
                <label for="login-password" class="form-label">Password</label>
                <input type="password" class="form-control" id="login-password">
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-primary">
              <div class="corner left_top"></div>
              <div class="corner left_bottom"></div>
              <div class="corner right_top"></div>
              <div class="corner right_bottom"></div>
              Login
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <div class="corner left_top"></div>
              <div class="corner left_bottom"></div>
              <div class="corner right_top"></div>
              <div class="corner right_bottom"></div>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/Logo/Logo";
import SceneNav from "../../components/SceneNav/SceneNav";
import SceneNavLink from "@/components/SceneNav/SceneNavLink";
export default {
  name: "Top",
  components: {SceneNavLink, SceneNav, Logo},
  data() {
    return {
      positionChange: false
    }
  },
  methods: {
    sceneChanged (newScene) {
      if (newScene === 'search' || newScene === 'memos') {
        this.positionChange = true
      } else {
        this.positionChange = false
      }
    }
  }
}
</script>

<style src="./Top.scss" lang="scss" scoped/>