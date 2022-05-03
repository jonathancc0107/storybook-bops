<template>
  <v-btn 
    :block="block" 
    :outlined="outlined"
    :depressed="depressed"
    :fab="fab"
    :disabled="disabled" 
    :color="color"
    :dark="dark"
    :x-small="xsmall"
    :small="small"
    :large="large"
    :x-large="xlarge"
    :plain="plain"
    :rounded="rounded"
    :tile="tile"
    :text="text"
    :raised="raised"
    :icon="icon">
    <v-icon>{{ icon_text }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BopsButtonIcon',
  props: {
    color    : String,
    icon_text: String,
    icon     : Boolean,
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
