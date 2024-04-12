
<script lang="ts">

import axios from 'axios'

import {defineComponent} from "vue";

export default defineComponent({

  data(){
    return{

      discountsArray:[],

          /*

          [

        {

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/2487060/header.jpg?t=1712257582',

          oldPrice:710,

          newPrice:568,

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },


        {

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1465460/header.jpg?t=1712854317',

          oldPrice:1099,

          newPrice:989,

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },


        {

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/2094810/header.jpg?t=1712169691',

          oldPrice:400,

          newPrice:50,

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },

        {

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1840800/header_alt_assets_0.jpg?t=1712844206',

          oldPrice:1425,

          newPrice:1165.50,

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },

        {

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1893810/header_russian.jpg?t=1712698213',

          oldPrice:880,

          newPrice:792,

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },

        {

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1671360/header.jpg?t=1712756770',

          oldPrice:1300,

          newPrice:1105,

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },

      ],


      */



      currentDiscountItem:0,

    }
  },

  created(){

    axios.get('https://search-bot.ru/api/discounts',).then((response)=>{

      let formattedDiscountsArray:Array<any>=response.data.formattedDiscountsArray;

      console.log(formattedDiscountsArray);

      if(formattedDiscountsArray.length>0){

        this.discountsArray.push(...formattedDiscountsArray);

      }

    });

  },

  methods:{

    nextDiscountItem(){

      if(this.currentDiscountItem<this.discountsArray.length-1){

        this.currentDiscountItem++;

      }else{

        this.currentDiscountItem=0;

      }


    },

    lastDiscountItem(){

      if(this.currentDiscountItem==0){



        this.currentDiscountItem=this.discountsArray.length-1;

      }else{

        this.currentDiscountItem--;

      }

    },

  },


});

</script>

<template>

  <div class="discount">

    <div class="title">Рекомендуемые новинки</div>

    <div class="img-container"><img  v-if="discountsArray.length>0" :src="discountsArray[currentDiscountItem].imgURL"></div>

    <div class="advertisement-buttons-container">

      <div class="moreInformation">Узнать больше</div>

      <div class="free" v-if="discountsArray.length>0">

        <span class="line-through" >{{ discountsArray[currentDiscountItem].oldPrice }} руб</span>

        {{ discountsArray[currentDiscountItem].newPrice }} руб</div>

    </div>

    <div class="navigation-buttons-container">

      <img

          v-on:click="lastDiscountItem"

          src="./leftButton.svg"

      >

      <img

          v-on:click="nextDiscountItem"

          src="./rightButton.svg"

      >

    </div>

  </div>

</template>

<style scoped>

.discount{

  width:100%;
  height:100%;
  background:red;

  display:flex;
  flex-direction:column;

  background-color:rgba(17, 14, 37, 1);

  .title{

    color:white;
    font-size:25px;
    width:100%;
    height:50px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:Arial;

  }

  .img-container{

    //background:yellow;
    width:85%;
    height:70%;
    margin-left:auto;
    margin-right:auto;
    object-fit: contain;
    display:flex;
    align-items:center;

    img{

      width:100%;
      height:auto;

    }

  }

  .advertisement-buttons-container{

    margin-top:20px;
    width:85%;
    height:50px;
    //background-color: yellowgreen;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content: space-evenly;

    font-size:18px;

    .moreInformation, .free{
      text-align:center;
      border-radius:15px;
      color:white;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;
      padding-left:10px;
      padding-right:10px;
      cursor:pointer;
      width:45%;

    }




    .moreInformation{

      background-color:rgba(255, 39, 68, 1);

    }


    .free{

      background-color:rgba(34, 46, 82, 1);

      .line-through{

        text-decoration: line-through;
        text-decoration-color: white;
        font-size:13px;


      }

    }

  }



  .navigation-buttons-container{

    margin-top:5px;
    width:85%;
    height:30px;
    //background-color: yellowgreen;
    margin-left:auto;
    margin-right:auto;
    display:flex;
    justify-content: space-evenly;

    img{

      cursor:pointer;
      height:80%;
      width:auto;

    }

  }


}







</style>