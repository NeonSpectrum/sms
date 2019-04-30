<template>
  <div class="content">
    subject ng faculty
  </div>
</template>
<script>
export default {
  created() {
    console.log(window.config.user.username)
  }
}
</script>
<style lang="scss" scoped>
.anouncement {
  overflow-y: scroll;
  overflow-x: hidden;
}
img {
  object-fit: cover;
}

i {
  line-height: 1.6;
  color: gray;
}
.list {
  list-style-position: inside;
  list-style-type: none;
}
b {
  font-size: 16px;
}
.sub-info {
  font-size: 12px;
  padding-left: 19px;
}
</style>