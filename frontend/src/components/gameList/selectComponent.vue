
<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({

  props:{

    options:{
      type: Array<{name:string, description:string}>,
      required: true
    },


    tabindex:{
      type: Number,
      required: false,
      default: 0
    }
  },


  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },


  mounted(){
    this.$emit('input', this.selected);
  },

});

</script>

<template>

  <div
      class="custom-select-block"
      :tabindex="tabindex"
      @blur="open = false"
  >
    <div
        class="selected-item"
        :class="{open: open}"
        @click="open = !open"
    >
      {{ selected.name }}
    </div>




    <div
        class="items-list"
        :class="{selectHide: !open}"
    >
      <div
          class="item"
          v-for="(option, i) of options"
          :key="i"
          @click="selected=option; open=false; $emit('input', option)"
      >
        {{ option.name }}

      </div>


    </div>


  </div>




</template>

<style scoped lang="scss">


$background-color:rgba(34, 46, 82, 1);

.custom-select-block {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  font-family: Arial;
  font-size: 18px;

  .selected-item {
    background-color:$background-color;
    border-radius: 6px;
    //border: 1px solid #858586;
    color: #ffffff;
    padding-left: 8px;
    cursor: pointer;
    user-select: none;
  }

  .open{
    //border: 1px solid #CE9B2C;
    border-radius: 6px 6px 0px 0px;
  }

  .selected-item:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 10px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-color: #fff transparent transparent transparent;
  }




  .items-list {

    color: #ffffff;
    border-radius: 0px 0px 6px 6px;
    overflow-y: auto;
    height:250px;
    //border-right: 1px solid #CE9B2C;
    //border-left: 1px solid #CE9B2C;
    //border-bottom: 1px solid #CE9B2C;
    position: absolute;
    background-color: $background-color;
    left: 0;
    right: 0;

    &::-webkit-scrollbar{
      width: 10px; /* Ширина всего элемента навигации */
    }

    &::-webkit-scrollbar-track{
      //background: green; /* Цвет дорожки */
    }

    &::-webkit-scrollbar-thumb{
      background-color: black; /* Цвет бегунка */
      border-radius: 20px; /* Округление бегунка */
      border: 3px solid black; /* Оформление границ бегунка */
    }


    .item{
      color: #ffffff;
      padding-left: 8px;
      cursor: pointer;
      user-select: none;

      &:hover{
        background-color: gray;
      }

    }

  }



  .selectHide {
    display: none;
  }












}












</style>

