<template>
  <v-text-field
    :class="classes" 
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
    :suffix="suffix"
    :prepend-icon="iconP"
    :prepend-inner-icon="iconPI"
    :append-icon="iconA"
    :append-outer-icon="iconAO"
    v-model="inputValue"
    >
  </v-text-field>
</template>

<script>
export default {
  props: {
    classes       : String,
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
    value         : String,
    iconP         : String,
    iconPI        : String,
    iconA         : String,
    iconAO        : String,
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>
