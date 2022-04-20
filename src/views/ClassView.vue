<template>
  <div class="classview">
    <classmodal @classSuccess="clickAdd" />
    <div class="class-table">
      <el-table :data="tableClass" border style="width: 100%">
        <el-table-column label="STT" type="index" width="300"></el-table-column>
        <el-table-column prop="name" label="Tên lớp"></el-table-column>

        <el-table-column align="right">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(tableClass.$index, tableClass.row)">Delete</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import classmodal from "@/components/ClassModal.vue";
import { mapState } from "vuex";

export default {
  // computed:{
  //   tableClass(){
  //     return this.$store.state.tableClass
  //   }
  // },
  computed: mapState(["tableClass"]),

  methods: {
    clickAdd(formClass) {
      this.tableClass.push(formClass);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },

  components: {
    classmodal,
  },
};
</script>

<style>
.classview {
  margin-top: 15px;
}
</style>