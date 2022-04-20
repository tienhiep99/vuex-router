<template>
  <div class="studentmodal">
    <el-row>
      <el-button plain @click="dialogFormVisible = true">Thêm học sinh</el-button>
    </el-row>

    <el-dialog title="Nhập thông tin học sinh" :visible.sync="dialogFormVisible">
      <el-form :model="formStudent">
        <el-form-item>
          <el-input v-model="formStudent.name" placeholder="Nhập tên học sinh..." autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formStudent.birthday" placeholder="Nhập ngày sinh học sinh..." autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formStudent.classId" placeholder="Chọn lớp...">
            <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option> -->
            <el-option v-for="item in tableClass" :key="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="onSubmit">Đồng ý</el-button>
        <el-button plain @click="cancel">Hủy</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formStudent: {
        name: "",
        birthday: "",
        classId: ""
      }
    };
  },

  computed: mapState(['tableClass']),

  methods:{
    toggleAddModal() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },

    onSubmit() {
      this.$emit('studentSuccess', this.formStudent);
      this.toggleAddModal();
      this.formStudent = {}
    },

    cancel(){
      this.toggleAddModal();
      this.formStudent = {}
    }
  }
};
</script>

<style>
.studentmodal {
  float: right;
  margin-bottom: 15px;
}
.el-row {
  right: 35px;
}
.el-dialog {
  width: 400px;
}
.el-select {
    display: block;
}
</style>