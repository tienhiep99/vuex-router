<template>
  <div class="studentview">
    <studentmodal @studentSuccess="clickAdd"/>
    <div class="student-table">
      <el-table :data="tableStudent" border style="width: 100%">
        <el-table-column label="STT" type="index" width="150"> </el-table-column>
        <el-table-column prop="name" label="Tên học sinh"></el-table-column>
        <el-table-column prop="birthday" label="Ngày sinh"></el-table-column>
        <el-table-column prop="classId" label="Tên lớp"></el-table-column>
        <el-table-column align="right">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import studentmodal from "@/components/StudentModal.vue";
import {mapState} from 'vuex'

export default {
  computed: mapState(['tableStudent']),

  methods: {
    clickAdd(formStudent) {
      this.tableStudent.push(formStudent);
    }
  },

  components: {
    studentmodal,
  },
};
</script>

<style>
  .studentview{
    margin-top: 15px;
  }
</style>