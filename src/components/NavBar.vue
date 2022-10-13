<template>
  <div id="navbar">
    <router-link to="/">
      <h1>Bike's Heaven</h1>
    </router-link>
    <router-link to="/cart">
      <button class="shopping-cart">Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
}

h1 {
  flex: 1;
  color: black;
  margin: 0;
}

a {
  text-decoration: none;
}

.shopping-cart {
  flex: 1;
}
</style>
