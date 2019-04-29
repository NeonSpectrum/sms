<template>
  <div>
    <div class="header">
      <h1><b>Russell John Santos</b> <span class="studentnum">#20150109163</span></h1>
    </div>
    <div class="div-content shadow" style="width:75%; margin:0px 40px">
      <b-table striped hover :items="items" thead-class="hidden_header"></b-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { info: 'Age', content: '20' },
        { info: 'Religion', content: 'Catholic' },
        { info: 'Section', content: 'Diamond' },
        { info: 'Address', content: 'Quezon City' }
      ]
    }
  }
}
</script>
<style lang="scss" >
.hidden_header {
  display: none;
}
.header {
  margin: 50px;
}
.studentnum {
  font-style: italic;
  color: gray;
}
</style>