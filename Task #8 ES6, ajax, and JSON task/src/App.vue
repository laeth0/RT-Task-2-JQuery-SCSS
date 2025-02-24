<script setup>
import { ref } from 'vue';

const username = ref('');
const users = ref([]);
const searchedUsers = new Set();

const searchUser = async () => {
  const user = username.value.trim();
  if (!user) return;
  if (searchedUsers.has(user)) {
    console.log('User already searched');
    document.getElementById(user)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const userData = await response.json();
    users.value.push({ ...userData, username: user });
    searchedUsers.add(user);
  } catch (error) {
    alert(error.message);
  }
};

</script>
<template>
  <div>
    <input v-model="username" placeholder="Enter GitHub username" />
    <button @click="searchUser">Search</button>
    <div id="results">
      <div v-for="user in users" :id="user.login" :key="user.id" class="user-row">
        <img v-if="user.avatar_url" :src="user.avatar_url" alt="Avatar" width="50" height="50" />
        <p v-if="user.name"><strong>Name:</strong> {{ user.name }}</p>
        <p v-if="user.company"><strong>Company:</strong> {{ user.company }}</p>
        <p v-if="user.email"><strong>Email:</strong> {{ user.email }}</p>
        <p v-if="user.followers"><strong>Followers:</strong> {{ user.followers }}</p>
        <p v-if="user.following"><strong>Following:</strong> {{ user.following }}</p>
        <p v-if="user.public_repos"><strong>Public Repos:</strong> {{ user.public_repos }}</p>
        <p v-if="user.location"><strong>Location:</strong> {{ user.location }}</p>
        <p v-if="user.bio"><strong>Bio:</strong> {{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.user-row {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
</style>
