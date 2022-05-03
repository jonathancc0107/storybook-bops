<template>
  <v-btn 
    :block="block" 
    :outlined="outlined"
    :depressed="depressed"
    :fab="fab"
    :disabled="loading" 
    :color="color"
    :dark="dark"
    :x-small="xsmall"
    :small="small"
    :large="large"
    :x-large="xlarge"
    :plain="plain"
    :rounded="rounded"
    :tile="tile"
    :text="textB"
    :raised="raised"
    :loading="loading">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'BopsButtonLoader',
  props: {
    text     : String,
    color    : String,
    outlined : Boolean,
    block    : Boolean,
    depressed: Boolean,
    fab      : Boolean,
    loading  : Boolean,
    dark     : Boolean,
    xsmall   : Boolean,
    small    : Boolean,
    large    : Boolean,
    xlarge   : Boolean,
    plain    : Boolean,
    rounded  : Boolean,
    tile     : Boolean,
    textB    : Boolean,
    raised   : Boolean,
  }
};
</script>
