<template>
<div class="orderform" style="postion:absolute;z-index:-1">
<v-container>
  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <h2 class="primary--text">OrderForm</h2>
    <v-text-field
      v-model="itemcode"
      :counter="10"
      :rules="ICRules"
      label="Item Code"
      outlined
      clearable
      required
    ></v-text-field>

    <v-text-field
      v-model="itemnumber"
      :rules="INRules"
      label="Item Number"
      outlined
      clearable
      required
    ></v-text-field>

     <v-text-field
      v-model="quantity"
      :rules="QuantityRules"
      label="Quantity"
      outlined
      clearable
      required
     ></v-text-field>

     <v-text-field
      v-model="price"
      :rules="PriceRules"
      label="Price"
      outlined
      clearable
      required
     ></v-text-field>

     <v-text-field
      v-model="discount"
      :rules="DiscountRules"
      label="Discount"
      outlined
      clearable
      required
     ></v-text-field>

    <v-btn
     :disabled="!valid"
      color="success"
      type="submit"
      class="mr-4"
     @click="submit"
    >
      Submit
    </v-btn>
    
  </v-form>
</v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      
      ICRules: [
        v => !!v || 'Item Code is required',
      ],
      INRules: [
        v => !!v || 'Item Number is required',
      ],
      QuantityRules: [
        v => !!v || 'Quantity is required',
      ],
      PriceRules: [
        v => !!v || 'Price is required',
      ],
      DiscountRules: [
        v => !!v || 'Discount is required',
      ],

      // name: '',
     // nameRules: [
    //  v => !!v || 'Name is required',
    //  v => (v && v.length <= 10) || 'Name must be less than 10 characters',
     // ],
      //email: '',
     //emailRules: [
      //  v => !!v || 'E-mail is required',
      //  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      //],
       return:{
        itemcode:'',
        itemnumber:'',
         },
    }),

    methods: {
      submit(){
      //console.log(this.itemcode)
      //console.log("Item Code is  and Item Number is ");
      }

     /* validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },*/
    }
  }
</script>
