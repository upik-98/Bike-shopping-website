<template>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <div v-for="product in cartItems" :key="product.id" class="product-container">
            <img class="product-image" :src="product.imageUrl" alt="bikeImage">
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>${{ product.price }}</p>
            </div>
            <button class="remove-button" @click="removeFromCart(product.id)">Remove from Cart</button>
        </div>
        <h3 id='total-price'>Total: ${{ totalPrice }}</h3>
        <button id="checkout-button">Proceed to checkout</button>

    </div>
</template>

<script>

import axios from 'axios';
export default {
    name: 'CartPage',
    data() {
        return {
            cartItems: [],
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            for (let cart = 0; cart < this.cartItems.length; cart++) {
                total += Number((this.cartItems[cart].price).replace(",", ''));
                console.log(total);
            }
            return total.toLocaleString();
        }
    },
    async created() {
        const response = await axios.get(`/api/users/123456789/cart`);
        const cartItem = response.data;
        this.cartItems = cartItem;
    },
    methods: {
        async removeFromCart(id) {
            const response = await axios.delete(`/api/users/123456789/cart/${id}`);
            const cartItem = response.data;
            this.cartItems = cartItem;
            // alert("Cart item removed successfully");
        }
    }
};
</script>

<style scoped>
h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
}

#total-price {
    padding: 16px;
    text-align: right;
}

#checkout-button {
    width: 100%;
}

.product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
}

.product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
}

.details-wrap {
    padding: 0 16px;
    flex: 3;
}

.remove-button {
    margin: auto;
    flex: 1;
}
</style>