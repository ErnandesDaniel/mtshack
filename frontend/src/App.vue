<script lang="ts">

import {defineComponent} from "vue";

import chatComponent from '@/components/chatComponent/chatComponent.vue';
import discount from '@/components/discount/discount.vue';
import gameList from '@/components/gameList/gameList.vue';

import axios from 'axios';

export default defineComponent({

  created(){

    //console.log(axios);

    //axios.get('https://steamdb.info/').then((data)=>{

      //console.log(data);

    //});


  },

  data(){
    return{

      fullWidth:false,//Развернуто приложение на полную ширину или нет

      collapsed:true,//Свернуто ли приложение до минимума

    }
  },

  computed:{

    iconToggleColor(){
      if(this.fullWidth==true){

        return 'red';

      }else{

        return 'green';

      }

    },

  },

  methods:{

    toggleModalWindow(){

      this.fullWidth=!this.fullWidth;

    },

    openModalWindow(){

      this.collapsed=false;


    },

    closeModalWindow(){

      this.collapsed=true;

    },


  },

  components:{

    chatComponent,

    discount,

    gameList,

  }


})

</script>

<template>


<div

    class="base-app-styles"

    :class="{fullWidth:fullWidth, shortWidth:!fullWidth}"

    v-show="collapsed==false"

>

    <div class="content">

      <gameList class="discountComponent" v-if="fullWidth==true"/>

      <chatComponent

          class="chatComponent"

      />

      <discount class="discountComponent" v-if="fullWidth==true"/>




    <div class="toggleModalWindowButton">

      <span v-if="fullWidth==true" v-on:click="toggleModalWindow">✖</span>

      <span v-if="fullWidth==false" v-on:click="toggleModalWindow">&#128470;</span>

      <span class="closeModalWindow" v-if="fullWidth==false" v-on:click="closeModalWindow">&#128469;</span>

    </div>

    </div>


</div>


  <div

      class="collapsed"

      v-show="collapsed==true"

      v-on:click="openModalWindow"

  >Напиши боту ;)


    <img

        src="@/assets/sendMessageText.svg"

        class="openChatComponent"

    >


  </div>

</template>

<style lang="scss">

  //Отступ скролла справа на ПК
  $scroll-line-width: 17px;

  //Ширина отступа от границ экрана на ПК
  $short-width-margins:20px;

  //Цвет подсветки иконки смены режима отображения
  $iconToggleColor:v-bind(iconToggleColor);

  //Цвет заднего фона модального окна
  $modalWindowColor:rgba(34, 46, 82, 87%);;



  .collapsed{

    position:absolute;

    width:200px;
    height:50px;
    background:red;


    display:flex;
    align-items:center;
    justify-content:space-evenly;

    bottom:$short-width-margins;
    right:calc($scroll-line-width + $short-width-margins);
    font-size:20px;
    border-radius:20px;
    cursor:pointer;

    color:rgba(114, 120, 146, 1);
    background-color:rgba(34, 46, 82, 1);


  }

  .base-app-styles{

    position:absolute;

    background:#222E52;


    padding-bottom:20px;

  }


  .toggleModalWindowButton{

    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;

    right:5px;
    top:5px;
    font-size:27px;

    cursor:pointer;
    width:50px;
    height:30px;
    color:white;

    //border-top-right-radius:20px;

  }


  .content{

    padding-top:40px;
    //background-color:lawngreen;
    height:100%;
    width:100%;
    background:$modalWindowColor;
    border-radius:10px;
    display:flex;

  }



  .shortWidth{

    border-radius:10px;

    bottom:$short-width-margins;

    height:70vh;
    min-height:200px;
    max-height:500px;

    width:25vw;
    min-width:200px;
    max-width:500px;

    right:calc($scroll-line-width + $short-width-margins);

    display:flex;
    align-items:center;
    justify-content:center;
    //border-radius:20px;


    .content{

      display:flex;
      align-items:center;
      justify-content:center;

      position:relative;

      .toggleModalWindowButton{

        right:8px;

        &>span:hover{

          //background:$iconToggleColor;

        }

        &>.closeModalWindow:hover{

          //background:red;

        }


      }

      .chatComponent{

        width:100%;
        height:100%;

      }


    }

  }


  .fullWidth{

    bottom:25px;
    right:40px;
    height:80vh;
    width:80vw;
    left:0px;
    right:0px;
    margin-left:auto;
    margin-right:auto;

    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;


      .content{

        //display:flex;
        //align-items:center;
        //justify-content:center;

        position:relative;

        .toggleModalWindowButton{

          top:10px;
          right:10px;
          width:35px;


          &>span:hover{

           // background:$iconToggleColor;

          }

        }

        .chatComponent{

          width:30%;
          height:100%;
          //border-color:black;
          //border-style:solid;
          //border-width:2px;
          margin-left:auto;
          margin-right:auto;

        }



        .discountComponent{

          width:30%;
          height:100%;
          //border-color:black;
          //border-style:solid;
          //border-width:2px;
          margin-left:auto;
          margin-right:auto;


        }



      }

  }

</style>
