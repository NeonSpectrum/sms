<template>
  <div class="content">
    <b-row>
      <b-col cols="2">
        <div class="div-content shadow">
          <ul class="list">
            <li>
              <b> English </b> <br />
              <div><i class="fa fa-clock-o"></i> 9:00 - 12:00</div>
              <div><i class="fa fa-home "></i> Rm201</div>
              <div><i class="fa fa-user-o"></i> Manny Young</div>
            </li>
          </ul>
          <br />
          <div>
            <vs-button color="primary" type="gradient" style="width:100%" to="/subjectcontent"
              ><i class="fa fa-eye" style="color:white"></i> View Subject</vs-button
            >
          </div>
        </div>
      </b-col>
      <b-col cols="2">
        <div class="div-content shadow">
          <ul class="list">
            <li>
              <b> Math </b> <br />
              <div><i class="fa fa-clock-o"></i> 12:00 - 1:00</div>
              <div><i class="fa fa-home "></i> Rm202</div>
              <div><i class="fa fa-user-o"></i> Michaela Divine</div>
            </li>
          </ul>
          <br />
          <div>
            <vs-button color="primary" type="gradient" style="width:100%"
              ><i class="fa fa-eye" style="color:white"></i> View Subject</vs-button
            >
          </div>
        </div>
      </b-col>
      <b-col cols="2">
        <div class="div-content shadow">
          <ul class="list">
            <li>
              <b> Science </b> <br />
              <div><i class="fa fa-clock-o"></i> 1:00 - 3:00</div>
              <div><i class="fa fa-home "></i> Rm203</div>
              <div><i class="fa fa-user-o"></i> LIL</div>
            </li>
          </ul>
          <br />
          <div>
            <vs-button color="primary" type="gradient" style="width:100%"
              ><i class="fa fa-eye" style="color:white"></i> View Subject</vs-button
            >
          </div>
        </div>
      </b-col>
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
.col-2 {
  margin: 30px !important;
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
  font-size: 20px;
}
.sub-info {
  font-size: 12px;
  padding-left: 19px;
}
ul {
  padding-left: 20px;
}
</style>