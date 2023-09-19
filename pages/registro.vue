
<template>
  
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://images.pexels.com/photos/344775/pexels-photo-344775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ></v-img>
    
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
    <div class="text-center "><h1>Registrarse</h1></div>
   
    <form action="javascript:void(0)" @submit="">
      <div class="text-subtitle-1 text-medium-emphasis">Nombre</div>

      <v-text-field
        density="compact"
        v-model="user.name"
        required
        placeholder="Nombre"
        prepend-inner-icon="mdi-email-outline" 
        variant="outlined"
      ></v-text-field>
      <div class="text-subtitle-1 text-medium-emphasis">Correo electronico</div>
      <v-text-field
        density="compact"
        v-model="user.correo"
        required
        placeholder="Correo electronico"
        prepend-inner-icon="mdi-email-outline" 
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        v-model="user.contraseña"
        required
        placeholder="Ingresa la contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Confirmar contraseña
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        v-model="user.confir_contraseña"
        required
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Registrarse
      </v-btn>
      
    </form>
      
      <v-btn
        
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
      <NuxtLink to="/">
          Atras
      </NuxtLink>
      </v-btn>
      
    </v-card>
  </div>
</template>

<script>
 const user = ref({
      name: '',
      correo: '',
      contraseña: '',
      confir_contraseña: '',
    });
  export default {
    data: () => ({
      visible: false,
    }),
  }
  definePageMeta({
  layout: "blank",
});

</script>