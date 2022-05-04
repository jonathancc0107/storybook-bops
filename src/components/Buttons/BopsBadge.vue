<template>
  <v-badge
    :color="color"
    :bottom="bottom"
    :content="value"
    :value="value"
    :left="left"
    :dot="dot"
    :overlap="overlap">
    <slot></slot>
  </v-badge>
</template>

<script>
export default {
  name: 'BopsBadge',
  props: {
    color  : String,
    bottom : Boolean,
    left   : Boolean,
    dot    : Boolean,
    overlap: Boolean,
    value  : String,
  }
}
</script>
