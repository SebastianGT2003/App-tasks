
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
      <div class="text-center "><h1>Iniciar sesion</h1></div>
      <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

      <v-text-field
        density="compact"
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
        placeholder="Ingrese su contraseña"
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
        Iniciar sesion
      </v-btn>

      <v-card-text class="text-center">
        <NuxtLink to="/registro">
          Registrarse ahora <v-icon icon="mdi-chevron-right"></v-icon>
      </NuxtLink>
        
       
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  export default {
    data: () => ({
      visible: false,
    }),
  }
  definePageMeta({
  layout: "blank",
});

</script>