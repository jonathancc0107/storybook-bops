<template>
  <v-select
    :class="classes"
    :items="items"
    :label="label"
    :filled="filled"
    :outlined="outlined"
    :solo="solo"
    :dense="dense"
    :chips="chips"
    :disabled="disabled"
    :readonly="readonly"
    :menu-props="menuProps"
    :multiple="multiple"
    :prepend-icon="iconP"
    :prepend-inner-icon="iconPI"
    :append-icon="iconA"
    :append-outer-icon="iconAO"
    v-model="selectValue"
  >
    </v-select>
</template>

<script>
export default {
  props: {
    classes  : String,
    items    : Array,
    label    : String,
    filled   : Boolean,
    outlined : Boolean,
    solo     : Boolean,
    dense    : Boolean,
    disabled : Boolean,
    readonly : Boolean,
    value    : String,
    menuProps: Object,
    multiple : Boolean,
    chips    : Boolean,
    iconP    : String,
    iconPI   : String,
    iconA    : String,
    iconAO   : String,
  },
  computed: {
    selectValue: {
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
