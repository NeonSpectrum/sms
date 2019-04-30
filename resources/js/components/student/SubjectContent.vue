<template>
  <div class="content">
    <h1><b>English</b></h1>
    <div style="font-size:18px">
      <div><i class="fa fa-clock-o"></i> 9:00 - 12:00</div>
      <div><i class="fa fa-home "></i> Rm201</div>
      <div><i class="fa fa-user-o"></i> Manny Young</div>
    </div>
    <br />
    <b-row>
      <b-col cols="4">
        <b>Files</b>
        <div class="div-content shadow">
          <ul class="list">
            <li>
              <vs-button color="primary" type="line" style="width:100%" to="/subjectcontent">
                File Description 1
              </vs-button>
            </li>
            <li>
              <vs-button color="primary" type="line" style="width:100%" to="/subjectcontent">
                File Description 2
              </vs-button>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col cols="4">
        <b>Current Quizzes</b>
        <div class="div-content shadow"><br /><br /><br /><br /></div>
        <br />
        <a href="#" style="font-size:20px">Take Quiz</a>
        <br /><br />
        <b>Past Quizzes</b>
        <div class="div-content shadow">
          <ul class="list">
            <li>
              <vs-button color="primary" type="line" style="width:100%" to="/subjectcontent">
                Quiz Title 1 (Score)
              </vs-button>
            </li>
            <li>
              <vs-button color="primary" type="line" style="width:100%" to="/subjectcontent">
                Programming in JavasScript 1 (2/50)
              </vs-button>
            </li>
          </ul>
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
.list {
  list-style-position: inside;
  list-style-type: none;
}

ul {
  margin-bottom: 0px !important;
}
span {
  float: right;
}
</style>