<template>
  <div class="main">
    <h1>Taste of Asia </h1>
    <!-- <button @click="getTasks">Get Tasks</button> -->

    <!-- <div class="loading" v-if="useRecepeStore.loading">Loading...</div> -->


    <ProductCard v-for="recepe in recepeStore.tasks" :key="recepe.id">
      <div class="recipe">
        <img :src="recepe.imageUrl" alt="">
        <div class="recipe-info">
          <h4>{{ recepe.title }}</h4>
          <div><i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
          </div>
          <p>{{ recepe.description }}</p>
          <div>
            <p v-for="ingredient in recepeStore.tasks.ingredients" :key="ingredient">ingredient</p>
          </div>
        </div>

      </div>
    </ProductCard>

  </div>
</template>

<script>
// import ProductCard from '../components/'
import ProductCard from '../components/UI/ProductCard.vue';
import { useRecepeStore } from '../stores/recepeStore.js'

export default {
  setup() {
    const recepeStore = useRecepeStore()
    // const {id, title} = storeToRefs(taskStore)

    recepeStore.getTasks()

    return {
      recepeStore,
    }
  },
  components: {
    ProductCard
  }

}
</script>

<style scoped>
h4 {
  margin: 0.2rem auto;
}

.recipe {
  display: flex;
  justify-content: space-between;
}

.recipe-info {
  display: flex;
  flex-direction: column;

}

img {
  width: 100px;
  height: 100px;
}

.loading {
  font-size: 10rem;
}

.main {}

h1 {
  margin: 0 auto;
  text-align: center;
}
</style>