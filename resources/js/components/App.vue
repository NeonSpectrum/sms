<template>
  <div>
   <!--  <div class="h-100">
      <div>
        <Navbar />
      </div>
      <div style="margin-left:230px;width:100%;overflow:scrollable">
        <Breadcrumb />
        <router-view />
      </div>
    </div>
 -->    <div><router-view /></div>
  </div>
</template>
<script >
import Navbar from './Navbar'
import Breadcrumb from './Breadcrumb'
export default {
  components: { Navbar, Breadcrumb }
}
</script>