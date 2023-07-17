<template>
    <div id="page-wrap" v-if="product">
        <div id="img-wrap">
            <img :src="product.imageUrl" alt="bikeImage">
        </div>
        <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price">${{ product.price }}</h3>
            <p>Average rating: {{ product.averageRating }}</p>
            <button id="add-to-cart" @click="addToCart(product.id)">Add to Cart</button>
            <h4>Discription</h4>
            <p>{{ product.description }}</p>
        </div>
    </div>
    <div v-else>
        <ErrorPage />
    </div>
</template>

<script>
import ErrorPage from '../views/Default.vue';
import axios from 'axios';
export default {
    name: 'BikeDetailPage',
    data() {
        return {
            product: [],
        }
    },
    async created() {
        const id = this.$route.params.id;
        const response = await axios.get('/api/products/' + id);
        this.product = response.data;
    },
    components: {
        ErrorPage,
    },
    methods: {
        async addToCart(id) {
            console.log("id", id);
            if (id) {
                await axios.post('/api/users/123456789/cart/', { id: id });
                alert("product added to cart");
            }

        }
    }
};
</script>

<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
}

#img-wrap {
    text-align: center;
}

img {
    width: 400px;
}

#product-details {
    padding: 16px;
    position: relative;
}

#add-to-cart {
    width: 100%;
}

#price {
    position: absolute;
    top: 24px;
    right: 16px;
}
</style>
