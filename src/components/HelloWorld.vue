<template>
    <v-toolbar id='nav'  v-model="drawer">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title> 
        <span class="font-weight-light">Order</span>
        <span>Form</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <router-link to="/home" style="text-decoration: none;">
        <v-btn text>Home</v-btn>  
        </router-link>   
        <router-link to="/orderform" style="text-decoration: none;">
        <v-btn text>OrderForm</v-btn>
        </router-link>   
        <v-btn text>Login</v-btn>  
        </div>  

    </v-toolbar>
</template>

<style>
#nav {
margin-bottom:20px;
}
</style>

<script>
 export default {
    data: () => ({
     
    }),
 }
    </script>