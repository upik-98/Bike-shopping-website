<template>
    <div id="page-wrap" v-if="product">
        <div id="img-wrap">
            <img :src="product.imageUrl" alt="bikeImage">
        </div>
        <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price">${{ product.price }}</h3>
            <p>Average rating: {{ product.averageRating }}</p>
            <button id="add-to-cart" @click="addToCart(product.id)" v-if="!alreadyPresent && !showSuccessMessage">Add to
                Cart</button>
            <button id="add-to-cart" class="green-button" @click="addToCart(product.id)"
                v-if="!alreadyPresent && showSuccessMessage">successfully added to cart</button>
            <button id="add-to-cart" class="grey-button" @click="addToCart(product.id)" v-if="alreadyPresent">Item is
                already in the
                Cart</button>
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
            cartBikes: [],
            showSuccessMessage: false,
        }
    },
    async created() {
        const id = this.$route.params.id;
        const response = await axios.get('/api/products/' + id);
        this.product = response.data;
        const cartBikes = await axios.get('/api/users/123456789/cart');
        this.cartBikes = cartBikes.data;
        console.log()
    },
    components: {
        ErrorPage,
    },
    methods: {
        async addToCart(id) {
            console.log("id", id);
            if (id) {
                await axios.post('/api/users/123456789/cart/', { id: id });
                this.showSuccessMessage = true;
                setTimeout(() => { this.$router.push('/bikeCatalog') }, 2000);

            }

        }
    },
    computed: {
        alreadyPresent() {
            console.log(this.cartBikes);
            return this.cartBikes.some(item => item.id == this.product.id);
        },
    }
};
</script>

<style scoped>
.green-button {
    background-color: lightgreen;
}

.grey-button {
    background-color: grey;
}

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
