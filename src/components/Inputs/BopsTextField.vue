<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :solo="solo"
    :filled="filled"
    :outlined="outlined"
    :clearable="clearable"
    :dense="dense"
    :disabled="disabled"
    :readonly="readonly"
    :rules="rules"
    :hint="hint"
    :persistent-hint="persistenthint"
    :prefix="prefix"
    :sufix="sufix"
    >
  </v-text-field>
</template>

<script>
export default {
  props: {
    label         : String,
    placeholder   : String,
    type          : String,
    solo          : Boolean,
    filled        : Boolean,
    outlined      : Boolean,
    clearable     : Boolean,
    dense         : Boolean,
    disabled      : Boolean,
    readonly      : Boolean,
    rules         : Array,
    hint          : String,
    persistenthint: Boolean,
    prefix        : String,
    suffix        : String,
  }
}
</script>
