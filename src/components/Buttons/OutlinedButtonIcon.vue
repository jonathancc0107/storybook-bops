<template>
  <v-btn outlined fab :color="color">
    <v-icon>{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
  }
};
</script>
