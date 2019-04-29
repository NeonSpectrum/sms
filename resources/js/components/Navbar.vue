<template>
  <div class="parentx-static">
    <vs-sidebar
      static-position
      default-index="1"
      color="primary"
      class="sidebarx"
      style="height:100%"
      spacer
      v-model="active"
    >
      <div class="header-sidebar " slot="header">
        <div>
          <b>Schmx</b><br />
          Student Manager {{ $userType.type }}
        </div>
        <vs-divider position="left"></vs-divider>
        <vs-avatar size="70px" src="../../images/rustle.jpg" />
        <!-- <h4>
          Russell John B. Santos
          <vs-button color="primary"  type="flat"></vs-button>
        </h4> -->
      </div>
      <vs-sidebar-item
        :index="index + 1"
        v-for="(item, index) in $urls[$userType.type]"
        :key="index"
        :to="item.url"
      >
        {{ item.title }}
      </vs-sidebar-item>

      <!-- <vs-sidebar-item index="1" to="/dashboard">
        Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item index="2" to="/profile">
        Profile
      </vs-sidebar-item>
      <vs-sidebar-item index="3" to="/grades">
        Grades
      </vs-sidebar-item>

      <vs-sidebar-item index="4" to="/ledger">
        Ledger
      </vs-sidebar-item> -->

      <div class="footer-sidebar" slot="footer">
        <vs-button color="danger" type="flat" @click="logOut"
          ><span class="dark-blue-text">Sign Out <i class="fa fa-sign-out"></i></span
        ></vs-button>
        <vs-button color="primary" type="border"> <i class="fa fa-cog"></i></vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script >
export default {
  data: () => ({
    active: false
  }),

  methods: {
    logOut() {
      this.axios
        .post('logout')
        .then(({ data }) => {
          if (data.success === true) {
            location.href = '/'
          }
        })
        .catch(() => alert('Error submitting the form'))
    }
  }
}
</script>

<style lang="scss" scoped>
.parentx-static {
  overflow: hidden;
  height: auto;
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
button {
  margin-left: 10px;
}
button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
</style>