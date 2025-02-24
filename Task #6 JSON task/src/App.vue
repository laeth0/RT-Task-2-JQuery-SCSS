<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref([]);
const loading = ref(true);
const error = ref(null);
const fetchData=async () => {
  try {
    const response = await axios.get("https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json");
    data.value = response.data;
  } catch (err) {
    error.value = "Failed to fetch data: " + err.message;
  } finally {
    loading.value = false;
  }
}
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="container">
    <h1>JSON Data Display</h1>

    <div v-if="loading" class="status">Loading...</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <div v-else class="grid">
      <div v-for="(item, index) in data" :key="index" class="card">
        <h3>{{ item.name }}</h3>
        <p><strong>shortname:</strong> {{ item.shortname }}</p>
        <p><strong>Bio:</strong> {{ item.bio }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
.status {
  font-size: 18px;
  font-weight: bold;
}
.error {
  color: red;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.card h3 {
  margin-bottom: 10px;
}
</style>
