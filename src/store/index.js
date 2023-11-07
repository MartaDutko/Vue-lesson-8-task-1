import { createStore } from "vuex";
import { listCategories } from "../components/listCategories";
import { listProducts } from "../components/listProducts";

export default createStore({
  state: {
    categoryList:[],
    listProducts:[],
  },
  getters: {
    getCategoryList:({categoryList})=>categoryList,
    getListProducts:({listProducts})=>listProducts,
  },
  mutations: {
    setCategoriesList(state,list){
      state.categoryList=list
    },
    setListProducts(state,category){
      state.listProducts=listProducts.filter((product)=>product.category ===category)
    }
  },
  actions: {
    setCategoriesList({commit}){
      commit('setCategoriesList',listCategories)
    },
    setListProducts({commit},category){
      commit('setListProducts',category)
    }
  },
  modules: {},
});
