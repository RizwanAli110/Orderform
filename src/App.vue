<template>
  <v-app>
    <v-content>
      <OrderForm/>  
      <router-view/> 
    </v-content>
     
  </v-app>
</template>

<script>
import OrderForm from './components/OrderForm';

export default {
  name: 'App',

  components: {
    OrderForm,
  },

  data: () => ({
    //
  }),
};
</script>
