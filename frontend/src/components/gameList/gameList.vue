
<script lang="ts">

import {defineComponent} from "vue";

import selectComponent from './selectComponent.vue';

import gameItem from './gameItem.vue';


export default defineComponent({

  data(){
    return{

      genres:[

        {

          name:'Role-playing (RPG)',

          description:'Сосредоточена на решении проблем, взаимодействии с неигровыми персонажами, участии в боях, статистическом развитии персонажа',

        },

        {

          name:'Action',

          description:'Имеет акцент на борьбе, включает в себя прохождение определённых уровней для достижения битвы с боссами.',

        },

        {

          name:'Action-adventure',

          description:'Сочетает элементы экшена и жанра приключений',

        },

        {

          name:'Adventure',

          description:'Делает упор на головоломки без высокой активности',

        },

        {

          name:'Beat’em up',

          description:'Представляет собой рукопашный бой против множества противников',

        },

        {

          name:'Compilation',

          description:'Является сборником из нескольких выпущенных ранее игр',

        },

        {

          name:'Extreme sports',

          description:'Погружает в экстремальные виды спорта, требуют выполнить ряд трюков',

        },

        {

          name:'Fighting',

          description:'Основное внимание уделяется бою один на один',

        },

        {

          name:'Flight simulation',

          description:'Реалистичный симулятор физики самолёта, иногда с возможностью воздушного боя',

        },

        {

          name:'God game',

          description:'Симуляция мира и специфических «божественных» механик',

        },

        {

          name:'Hack and slash',

          description:'Особое внимание уделяется фэнтезийному ближнему бою',

        },

        {

          name:'Party',

          description:'Основное внимание уделяется коротким, простым мини-играм, в которые могут играть несколько игроков',

        },

        {

          name:'Platform',

          description:'Основное внимание уделяется прыжкам или сложностям навигации, часто включают в себя элементы игр-экшенов',

        },

        {

          name:'Puzzle',

          description:'Сосредоточена на решение абстрактных головоломок',

        },
        {

          name:'Racing',

          description:'Соревнованиями по времени между персонажами или транспортными средствами',

        },

        {

          name:'Action role-playing (Action RPG)',

          description:'Имеет акцент на исследованиях и рукопашном бое в реальном времени.',

        },
        {

          name:'Tactical role-playing',

          description:'Особое внимание уделяется позиционированию персонажа, его перемещению и дальности атаки на четко очерченном поле боя',

        },
        {

          name:'Rhythm',

          description:'Фокусируются на музыке, ритме, используется контроллерами, вроде танцевальных площадок или микрофонов',

        },
        {

          name:'Shoot’em up (shmup)',

          description:'Отличаются неистовым темпом, акцентом на показные бои с использованием оружия и огромным количеством трупов',

        },
        {

          name:'Sports',

          description:'Отражают соревнования по существующим видам спорта',

        },
        {

          name:'Stealth',

          description:'Акцентируют внимание на избежание конфликтов и поощряют использование стелс-тактики',

        },
        {

          name:'Strategy',

          description:'С акцентом на тактические управление ресурсами и территорией против оппонента',

        },

        {

          name:'Survival horror',

          description:'Приключения с ограниченными ресурсами, создающие страх',

        },

        {

          name:'Vehicular combat',

          description:'Экшн с непосредственным использованием транспорта',

        },

      ],

      gameList:[

        {

          name:'RimWorld',

          price:879,

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/294100/capsule_231x87.jpg?t=1712854761',

          detailedURL:'https://store.steampowered.com/app/294100/RimWorld?snr=1_7001_topselling__7003',


        },

        {

          name:'Infection Free Zone',

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1465460/capsule_231x87.jpg?t=1712860067',

          price:989,

          detailedURL:'https://store.steampowered.com/app/1465460/Infection_Free_Zone?snr=1_7001_topselling__7003',

        },

        {

          name:'Deep Rock Galactic',

          price:263,

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/548430/capsule_231x87_alt_assets_13.jpg?t=1709748678',

          detailedURL:'https://store.steampowered.com/app/548430/Deep_Rock_Galactic?snr=1_7001_topselling__7003',

        },

        {

          name:'Lethal Company',

          price:385,

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1966720/capsule_231x87.jpg?t=1700231592',

          detailedURL:'https://store.steampowered.com/app/1966720/Lethal_Company?snr=1_7001_topselling__7003',

        },

        {

          name:'Pacific Drive',

          price:1439,

          imgURL:'https://cdn.akamai.steamstatic.com/steam/apps/1458140/capsule_231x87.jpg?t=1708641540',

          detailedURL:'https://store.steampowered.com/app/1458140/Pacific_Drive?snr=1_7001_topselling__7003',

        },


      ],

    }
  },

  components:{

    selectComponent,

    gameItem,

  }

});

</script>

<template>

  <div class="game-list-container">

    <div class="title">Топ-5 игр</div>

    <selectComponent :options="genres" :tabindex="0" class="selectComponent"/>

    <div class="game-list">

      <gameItem

          v-for="(game, index) in gameList"

          :name="game.name"

          :number="index + 1"

          :price="game.price"

          :imgURL="game.imgURL"

          :detailedURL="game.detailedURL"

      />

    </div>

  </div>

</template>

<style scoped>

.game-list-container{

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

  .selectComponent{

    width:80%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:20px;


  }

  .game-list{

    overflow-y:scroll;

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

  }


}

</style>

