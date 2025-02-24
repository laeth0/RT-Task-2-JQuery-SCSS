<script setup>
import {ref} from 'vue';
import axios from "axios";

const langCode = ref('');
const titles = ref([]);
const error = ref('');

const loadXMLData = async () => {
  error.value = '';
  titles.value = [];

  if (!langCode.value.trim()) {
    error.value = "Please enter a language code.";
    return;
  }

  const url = `http://test.mkttracker.com/iup_dev_builder_new/content/shared/data/controlstitles_${langCode.value.trim()}.xml`;

  try {
    const response = await axios.get(url, {mode: 'no-cors'});
    console.log("response", response);
    // if (!response.ok) {
    //   throw new Error();
    // }

    const xmlText = await response.data.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const titleNodes = xmlDoc.getElementsByTagName("title");

    // if (titleNodes.length === 0) {
    //   throw new Error(`No data found for language: ${langCode.value}`);
    // }

    titles.value = Array.from(titleNodes).map(node => node.textContent);
  } catch (err) {
    console.log("error", err);
    error.value = err.message;
  }
};
</script>

<template>
  <div class="container">
    <h2>Load XML Data Based on Language</h2>
    <input v-model="langCode" placeholder="Enter language code (e.g., en, ar, es)"/>
    <button @click="loadXMLData">Update</button>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="titles.length > 0" class="data-container">
      <h3>Titles:</h3>
      <ul>
        <li v-for="(title, index) in titles" :key="index">{{ title }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 20px;
}

input {
  padding: 10px;
  margin-right: 10px;
}

button {
  padding: 10px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}

.data-container {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  max-width: 500px;
}
</style>
