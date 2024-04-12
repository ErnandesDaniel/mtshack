<script lang="ts">

import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import {defineComponent} from "vue";
import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";

export default defineComponent({

  data(){
    return {

      chatModel:new ChatTogetherAI({

        streaming: true,

        modelName: "meta-llama/Llama-2-70b-chat-hf",

      }),

      messageList:[

          {

            messageText:'Привет! Пишет AI ассистент МТС Банка Афанасия! Что Вас интересует?',

            createdByUser:false,

          },

      ],


      neuralNetworkIsTypingText:false,

      inputMessageText:'',

    }


  },

  computed:{

    textareaPlaceholder(){

      //Если нейросеть ответила
      if(this.neuralNetworkIsTypingText==false){

        return 'Ваше сообщение'

      }else{

        return 'Нейросеть отвечает...'

      }

    },

  },

  methods:{

    async sendMessageText(){

      function standardizeString(str:string){

        let newStr =str.replace(/\s+/g,' ');

        newStr=newStr.trim();

        return newStr;

      }

      //Проверяем пустое ли поле ввода данных (с учетом пробелов в строке)
      if(standardizeString(this.inputMessageText).length>0){

        let inputMessageText=this.inputMessageText;

        this.inputMessageText='';

        //Добавляем сообщение пользователя в массив
        this.messageList.push({

          messageText:inputMessageText,

          createdByUser:true,

        });


        try{

          //Создаем на основе списка отображаемых сообщений
         let messageListToSend:any=this.messageList.map((messageObject:any)=>{

           let message=null;

            if(messageObject.createdByUser==true){

              message=new HumanMessage(messageObject.messageText);


            }else{

              message=new AIMessage(messageObject.messageText)

            }

            return message;

          });


          //Убираем первое приветственное сообщение в массиве
          messageListToSend.shift();

          //Добаляем для бота системное сообщение с указаниями
         messageListToSend.push(new HumanMessage(`Ты AI ассистент МТС Банка по консультированию

         пользователей по контенту в Steam Афанасия (женский пол). Ты должен говорить на русском языке.`));

         //Выводим в консоль отправляемый массив сообщений
         console.log(messageListToSend);

          //Отключаем возможность писать новые запросы к нейросети, когда она отвечает на предыдущий запрос
          this.neuralNetworkIsTypingText=true;

         //Получаем ответ от робота:
          const response = await this.chatModel.stream(messageListToSend);

          let firstChatMessageChunk=false;

          let fullText = "";

          for await (const chunk of response) {

            console.log(chunk);

            fullText=fullText+chunk.content;

            if(firstChatMessageChunk==false){

              firstChatMessageChunk=true;

              //Добавляем сообщение от нейросети в массив
              this.messageList.push({

                messageText:chunk.content,

                createdByUser:false,

              });


            }else{

              //Изменяем последнее сообщение (которое принадлежит нейросети)
              this.messageList[this.messageList.length-1]={

                messageText:fullText,

                createdByUser:false,

              };

            }

          }

          //В конце выводим полный ответ от нейросети
          console.log(fullText);

          //Включаем возможность писать новые запросы к нейросети
          this.neuralNetworkIsTypingText=false;

        }catch(error){

          //Включаем возможность писать новые запросы к нейросети
          this.neuralNetworkIsTypingText=false;

          console.log(error);

        }

        //После обновления DOM прокручиваем скролл до конца
        await this.$nextTick(() => {

          //this.neuralNetworkResponded=true;

          this.$refs.messageListContainerHTMLObject.scrollTo(100,

              this.$refs.messageListHTMLObject.scrollHeight
          );

        });

      }

    },

  },


})

</script>

<template>

  <div class="chatComponent">

    <div class="message-list-container" ref="messageListContainerHTMLObject">

      <div class="message-list" ref="messageListHTMLObject">

        <div

            class="message-container"

            v-for="messageObject in messageList"

        >

          <div

              class="message"

              :class="{isUserMessage:messageObject.createdByUser==true,

              isBotMessage:messageObject.createdByUser==false}"


          >{{ messageObject.messageText }}</div>

        </div>

      </div>

    </div>

    <div class="footer">

      <textarea

          type="text"

          class="inputUserMessage"

          :placeholder="textareaPlaceholder"

          v-model="inputMessageText"

          :readonly="neuralNetworkIsTypingText==true"

          :class="{inputTextDisabled:neuralNetworkIsTypingText==true}"

      ></textarea>

      <img

          src="@/assets/sendMessageText.svg"

          class="sendMessageTextIconButton"

          v-on:click="sendMessageText"

      >

    </div>

  </div>

</template>

<style scoped lang="scss">

.chatComponent{

  display:flex;
  flex-direction:column;

  //background-color: black;

  .message-list-container{

    //background:white;
    height:100%;
    padding-top:20px;
    overflow-y:auto;
    overflow-x:hidden;

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

    .message-list{

      height:auto;

      .message-container{

        width:100%;
        min-height:50px;
        height:100%;
        //background:red;
        margin-bottom:20px;
        position:relative;
        display:grid;

        .message{

          width:70%;
          padding:10px;
          border-radius:5px;
          height:auto;
          white-space: pre-line;

        }

        .isUserMessage{

          background:rgb(65, 105, 255);
          color:white;

          justify-self:end;
          margin-right:14px;

        }

        .isBotMessage{

          background:grey;
          justify-self:start;
          margin-left:14px;

        }

      }

    }

  }

  .footer{

    min-height:50px;
    display:flex;
    align-items:center;

    background-color:red;
    border-radius:10px;
    background:rgb(65, 105, 255);

    .inputUserMessage{

      width:100%;
      height:70%;
      margin-left:10px;
      margin-right:10px;
      padding-left:10px;
      font-size:14px;
      resize:none;

      padding-top:8px;
      padding-left:10px;
      padding-bottom:3px;
      padding-right:3px;

      //background:red;
        border-radius:10px;
      //border-color:#D9D9D9;
      //border-style:solid;
      //border-width:2px;

      font-size:16px;



      background:rgb(65, 105, 255);
      color:white;

      &::placeholder{

        color:black;

      }

    }





    .inputTextDisabled{

      background:black;

      &::placeholder{

        color:white;

      }

    }



    .sendMessageTextIconButton{

      height:23px;
      widht:auto;
      margin-right:10px;
      cursor:pointer;

    }

  }

}

</style>
