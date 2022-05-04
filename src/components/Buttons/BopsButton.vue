<template>
  <v-btn
    :class="classes" 
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
    :icon="icon"
    :loading="loading"
    @click="handleClick">
      <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'BopsButton',
  props: {
    classes  : String,
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
    icon     : Boolean,
    loading  : Boolean,
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  }
};
</script>
