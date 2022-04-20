<template>
  <div class="classmodal">
    <el-row>
      <el-button plain @click="dialogFormVisible = true">Thêm lớp</el-button>
    </el-row>

    <el-dialog title="Nhập thông tin lớp" :visible.sync="dialogFormVisible">
      <el-form :model="formClass">
        <el-form-item>
          <el-input v-model="formClass.name" placeholder="Nhập tên lớp..." autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button plain @click="onSubmit">Đồng ý</el-button>
        <el-button plain @click="dialogFormVisible = false">Hủy</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formClass: {
        name: ""
      },
    };
  },

  methods:{
    toggleAddModal() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },

    onSubmit() {
      console.log(this.formClass);
      this.$emit('classSuccess', this.formClass);
      this.toggleAddModal();
      this.formClass = {};
    }
  }
};
</script>

<style>
.classmodal {
  float: right;
  margin-bottom: 15px;
}
.el-row {
  right: 35px;
}
.el-dialog {
  width: 400px;
}
</style>