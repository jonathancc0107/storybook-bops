<template>
  <v-btn outlined :color="color">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
  }
};
</script>
