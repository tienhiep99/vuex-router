import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: {
    tableClass: [
      {
        name: "Lớp A",
      },
      {
        name: "Lớp B",
      },
    ],
    tableStudent: [
      {
        name: 'Hiep',
        birthday: '20/2/1999',
        classId: 'Lớp A'
      }
    ],
  },
};

const store = new Vuex.Store(storeData)
export default store
