<template>
  <div class="user_login_v2_div">
    Hello Word
  </div>
</template>

<script>
export default {
  name: "UserLoginV2",
  data() {
    return {}
  },
  methods: {
    cancelForm() {
    },
    onClick() {
    },
    handleClose() {
    },
    closeDialog() {

    },
    openRegisterDialogAndCloseLogin() {

    }
  },
  computed: {
    isOpenLoginDialog() {
      return this.$store.state.controlStatus.authDialogStatus === this.$store.state.staticVariable.login.openLoginDialog
    },
  },
}
</script>

<style>

/*PC*/
@media screen and (min-width: 768px) {
  .user_login_v2_div {
    width: 30em;
    height: 30em;
    border: 4px solid pink;
    z-index: 1000000000000;
    position: absolute;
    top: 25em;
    left: 65em;
  }
}

</style>