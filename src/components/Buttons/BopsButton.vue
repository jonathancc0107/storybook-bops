<template>
  <v-btn 
    :block="block" 
    :outlined="outlined"
    :depressed="depressed"
    :fab="fab"
    :disabled="disabled" 
    :color="color"
    :dark="dark"
    :x-small="xmall"
    :small="small"
    :large="large"
    :x-large="xlarge"
    :plain="plain"
    :rounded="rounded"
    :tile="tile"
    :text="text"
    :raised="raised">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'BopsButton',
  props: {
    text     : String,
    color    : String,
    outlined : Boolean,
    block    : Boolean,
    depressed: Boolean,
    fab      : Boolean,
    disabled : Boolean,
    dark     : Boolean,
    xsmall   : Boolean,
    small    : Boolean,
    large    : Boolean,
    xlarge   : Boolean,
    plain    : Boolean,
    rounded  : Boolean,
    tile     : Boolean,
    text     : Boolean,
    raised   : Boolean,
  }
};
</script>
