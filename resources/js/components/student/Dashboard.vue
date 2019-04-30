<template>
  <div class="content">
    <b-row>
      <b-col>
        <b-row>
          <b-col>
            <b>Subjects</b>
            <a href="/subject"><i class="fa fa-external-link outer-link"></i></a>
            <div class="div-content shadow">
              <ul class="list">
                <li>
                  <b> <i class="fa fa-circle-o "></i> English </b> <br />
                  <div class="sub-info">9:00 - 12:00 @ Rm201</div>
                  <b> <i class="fa fa-circle-o "></i> Math </b> <br />
                  <div class="sub-info">12:00 - 1:00 @ Rm202</div>
                  <b> <i class="fa fa-circle-o "></i> Science </b> <br />
                  <div class="sub-info">1:00 - 3:00 @ Rm203</div>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <b>Today's Task</b> <a href="/subject"><i class="fa fa-external-link outer-link"></i></a>
            <div class="div-content shadow">
              <ul class="list">
                <li>
                  <b> <i class="fa fa-circle-o "></i> Quiz-Nouns (English) </b> <br />
                  <div class="sub-info">9:00 - 12:00 @ Rm201</div>
                  <b> <i class="fa fa-circle-o "></i> Quiz-Nouns (Math) </b> <br />
                  <div class="sub-info">12:00 - 1:00 @ Rm202</div>
                  <b> <i class="fa fa-circle-o "></i> Activity (Science) </b> <br />
                  <div class="sub-info">1:00 - 3:00 @ Rm203</div>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <br />
            <b>Announcements</b> <a href="#"><i class="fa fa-external-link outer-link"></i></a>
            <div class="div-content shadow anouncement" style="height:250px">
              <b-row>
                <b-col cols="3" class="text-center">
                  <img src="../../../images/social.png" height="140px" width="150px" />
                </b-col>
                <b-col>
                  <h4>Title</h4>
                  <p>Sept. 29, 2018</p>
                  <p>description</p>
                </b-col>
              </b-row>
              <vs-divider position="left"></vs-divider>
              <b-row>
                <b-col cols="3" class="text-center">
                  <img src="../../../images/social.png" height="140px" width="150px" />
                </b-col>
                <b-col>
                  <h4>Title</h4>
                  <p>Sept. 29, 2018</p>
                  <p>description</p>
                </b-col>
              </b-row>
              <vs-divider position="left"></vs-divider>
              <b-row>
                <b-col cols="3" class="text-center">
                  <img src="../../../images/social.png" height="140px" width="150px" />
                </b-col>
                <b-col>
                  <h4>Title</h4>
                  <p>Sept. 29, 2018</p>
                  <p>description</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
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