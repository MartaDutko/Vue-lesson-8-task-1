<template>
    <div class="block__categories">
        <div v-for="product in getCategoryList" :key="product.id" 
        class="categories" @click="this.$emit('chooseCategory',product.category)">
            <img :src="product.imgLink" />
            <p>{{ product.tittle }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ListCategories',
    computed: {
        ...mapGetters(['getCategoryList']),
    },
}
</script>

<style lang="css" scoped>
.block__categories {
    width: 100%;
    height: 300px;
    background-color: #f0f0f086;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.categories {
    width: 15%;
    min-height: 150px;
    padding: 20px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.3s ease;
}
.categories:hover {
    transform: scale(1.05);
    cursor: pointer;
}
img {
    width: 50%;
}
p {
    font-size: 70%;
    margin: 0;
}
</style>