
<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({

  props:{

    name:String,

    price:Number,

    number:Number,

    imgURL:String,

    detailedURL:String,

  }


});

</script>

<template>

  <div class="game-item">

    <div class="game-number">{{ number }}.</div>

    <div class="img-container left-container"><img :src="imgURL"></div>

    <div class="right-container">

      <div class="top-line">

        <div class="name">{{ name }}</div>

      </div>

      <div class="bottom-line">

        <div class="price">{{price}} RUB</div>

        <a class="goTo" :href="detailedURL">Перейти</a>

      </div>


    </div>

  </div>

</template>

<style scoped lang="scss">

.game-item{

  font-family: Arial;
  width:90%;
  height:100px;
  margin-bottom:10px;

  //background:white;
  margin-left:auto;
  margin-right:auto;
  display:flex;

  .game-number{

    //background-color: green;
    width:10%;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:18px;
    color:white;

  }

  .left-container, .img-container{

    //background:yellow;
    width:30%;
    height:100%;
    display:flex;
    align-items:center;

    img{

      width:100%;
      height:auto;

    }

  }

  .right-container{

    width:60%;
    height:100%;
    //background-color:red;

    .top-line{

      height:30%;
      padding-top:10px;

      .name{

        text-align:center;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:15px;
        color:white;
        font-size:18px;

      }

    }

    .bottom-line{

      height:70%;

      display:flex;
      justify-content:space-evenly;
      align-items:end;
      padding-bottom:20px;

      .price{

        //background:red;

        background: rgba(255, 39, 68, 1);
        width:45%;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        cursor:pointer;
        color:white;

        display:flex;
        align-items:center;
        justify-content: center;
        height:25px;

      }

      .goTo{

        //background:greenyellow;

        background: rgba(255, 39, 68, 1);
        width:45%;
        border-radius:10px;
        align-items:center;
        justify-content:center;
        text-align:center;
        cursor:pointer;
        color:white;

        display:flex;
        align-items:center;
        justify-content: center;
        height:25px;

      }

    }

  }

}









</style>

