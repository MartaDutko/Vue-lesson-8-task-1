<template>
    <div class="block__product">
        <div v-for="product in productList" :key="product.id" class="product">
            <a :href="product.link" class="product-link">
                <img :src="product.imgLink" />
                <div class="description-block">
                    <p class="productTittle">{{ product.tittle }}</p>
                    <p class="productCurrentPrice">{{ product.currentPrice }} ₴</p>
                    <p v-if="product.oldPrice" class="productOldPrice">{{ product.oldPrice }} ₴</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListProducts',
    props: {
        productList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="css" scoped>
.block__product {
    width: 100%;
    background-color: #f0f0f086;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    flex-wrap: wrap;
}
.product {
    min-height: 250px;
    padding: 20px;
    border: 1px solid black;
    width: 20%;
    box-sizing: border-box;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: transform 0.3s ease;
}
.product:hover {
    transform: scale(1.05);
    cursor: pointer;
}
.product-link {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
img {
    max-width: 60%;
}

a {
    text-decoration: none;
    color: black;
}

.productCurrentPrice {
    color: red;
    font-weight: 600;
}
.productOldPrice {
    text-decoration: line-through;
}

p {
    margin: 0;
    font-size: 10px;
}
</style>