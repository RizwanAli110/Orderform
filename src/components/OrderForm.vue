<template>
<v-card>
<div class="orderform" style="postion:absolute;z-index:-1">
<v-container>
  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-toolbar>
    <h2 class="primary--text justify-center">OrderForm</h2>
    </v-toolbar>
    <v-text-field
      v-model="itemcode"
      :counter="10"
      :rules="Required"
      label="Item Code"
      
      clearable
      required
    ></v-text-field>

    <v-text-field
      v-model="itemnumber"
      :rules="Required"
      label="Item Number"
      
      clearable
      required
    ></v-text-field>

     <v-text-field
      v-model="quantity"
      :rules="Required"
      label="Quantity"
      
      clearable
      required
     ></v-text-field>

     <v-text-field
      v-model="price"
      :rules="Required"
      label="Price"
      
      clearable
      required
     ></v-text-field>

     <v-text-field
      v-model="discount"
      :rules="Required"
      label="Discount"
      
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
</v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      
      Required: [
        v => !!v || 'This field is required',
      ],
     
      quantity:'',
      price:'',
      discount:'',
      itemcode:'',
      itemnumber:'',
        
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
