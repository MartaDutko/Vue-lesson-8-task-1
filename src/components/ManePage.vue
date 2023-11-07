<template>
    <div class="wrapper">
        <list-categories @chooseCategory="selectedCategory" />
        <list-products :productList="getListProducts" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ListCategories from './ListCategories.vue'
import ListProducts from './ListProducts.vue'

export default {
    name: 'ManePage',
    components: { ListCategories, ListProducts },

    computed: {
        ...mapGetters(['getListProducts']),
    },

    methods: {
        ...mapActions(['setCategoriesList', 'setListProducts']),
        selectedCategory(category) {
            this.setListProducts(category)
        },
    },
    created() {
        this.setCategoriesList()
    },
}
</script>

<style lang="css" scoped>
.wrapper{
    width: 90%;
}
</style>