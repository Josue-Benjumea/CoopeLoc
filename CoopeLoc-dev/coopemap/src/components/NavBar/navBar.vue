<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#00E3FF">fas fa-dragon</v-icon>
    </v-btn>
    <v-btn text color="white" @click="scroll('home')">Home</v-btn>
    <v-btn text color="white" @click="scroll('about')">About</v-btn>
    <v-btn text color="white" @click="scroll('product')">Product</v-btn>
    <v-btn text color="white" @click="scroll('contact')">Contact</v-btn>
    <v-spacer></v-spacer>
    <v-btn
      ><router-link style="color: white; text-decoration: none" to="/map"
        ><v-icon color="#00E3FF" class="m-3">fas fa-earth-americas</v-icon
        >CoopeMaps</router-link
      ></v-btn> 
        <v-btn
      ><router-link style="color: white; text-decoration: none" to="/main"
        ><v-icon color="#00E3FF" class="m-3">fas fa-folder</v-icon
        >Admin</router-link
      ></v-btn> 
      
      
    >
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style></style>
