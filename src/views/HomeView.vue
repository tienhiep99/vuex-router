<template>
  <div class="home">
    <!-- <HelloWorld/> -->
    <p>Tổng số lớp: {{ tableClass.length }} </p>
    <p>Tổng số học sinh: {{ tableStudent.length }}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeView',

  // computed:{
  //   totalClass(){
  //     return this.$store.state.tableClass
  //   },
  //   totalStudent(){
  //     return this.$store.state.tableStudent
  //   }
  // }
  computed: mapState(['tableClass', 'tableStudent']),
}
</script>

<style>
  .home{
    margin-top: 50px;
    font-size: 20px;
  }
</style>
