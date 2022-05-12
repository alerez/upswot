<template>
  <div @click="logout" class="logout">
    LOGOUT
  </div>
  <div class="bgTodo"></div>
  <div class="mainTodo">
    <div>
      <img src="./../assets/img/Logo.svg"/>
    </div>
    <div>
      <h1 class="titleTodo">Hello Admin</h1>
      <div class="inpTodo">
        <field v-on:keyup.enter="addTask"
               v-model="newTasks"
               type="text"
               text="New task"
               autofocus
               autocomplete="on"


        />
        <button @click="addTask">ADD</button>
      </div>
      <div class="listTask">
        <div v-for="(item, keys) in this.todo" :key="keys" class="task">
          <div v-if="keys !== this.editable" class="taskContent" v-bind:class="item.done ? 'taskDone' : 'taskDis'">
            <div class="taskContent__text">
              {{item.text}}
            </div>
            <div class="taskContent__button">
              <button v-show="!item.done" @click="taskDone(keys)" class="done">Done</button>
              <button v-show="item.done" @click="taskDone(keys)"  class="edit">Disable</button>
              <button v-show="!item.done" @click="taskEdit({ text: item.text, id:keys })" class="edit">Edit</button>
              <button @click="taskDelete(keys)" class="delete">Delete</button>
            </div>
          </div>
          <div v-else class="taskContent">
            <div class="taskContent__input">
              <field v-on:keyup.enter="taskEditDone({ text: editText, id:keys })" v-model="editText" type="text" text="Введите текст"/>
            </div>
            <div class="taskContent__button">
              <button @click="taskEditDone({ text: editText, id:keys })" class="done">Done</button>
              <button @click="taskEdit({ text: '', id:'' })" class="edit">Exit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Field from "@/components/field";
import router from "@/router";

export default {
  name: "todo",
  components: {Field},
  data() {
    return {
      editable: '',
      editText: '',
      newTasks: ''
    }
  },
  methods: {
    ...mapActions(['GET_POST', 'GET_DONE', 'GET_PUT', 'GET_DELETE', 'GET_LOGOUT']),
    taskDelete: function (data) {
      this.GET_DELETE(data);
    },

    taskEdit: function (data) {
        this.editable = data.id
        this.editText = data.text
    },
    taskEditDone: function (data) {
      this.editable = false
      this.GET_PUT(data)
    },

    taskDone: function (data) {
      this.GET_DONE(data);
    },

    addTask: function () {
      if(this.newTasks !== '')
      this.GET_POST(this.newTasks);
      this.newTasks = ''
    },

    logout: function () {
      this.GET_LOGOUT()
    }
  },
  computed: {
    ...mapState(['todo', 'authorizationType'])
  },
  beforeMount() {
    if(!this.authorizationType){
      router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../assets/style/style.scss";


.logout{
  position:absolute;
  padding:20px;
  right:0;

  color:#FFFFFF;

  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  cursor:pointer;
}

.taskDone{
  border-bottom: limegreen solid 3px;
}
.taskDis{
  border-bottom: #cd1537 solid 3px;
}

.bgTodo{
  background:linear-gradient(180deg, #00A9E7 0%, #005B9F 100%);
  height:100vh;
  width:100vw;
  z-index:-1;
  position:fixed;
}

.mainTodo{
  //background: $bg-secondary;
  //height:100vh;

  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:40px;

  .titleTodo{
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;

    color:#FFFFFF;

    text-align:center;

    margin-top:40px;
  }

  .inpTodo{
    display:flex;
    justify-content:center;
    align-items:end;

    .field{
      margin-left:0;
    }

    button{
      width:80px;
      height:47px;
      margin-left:-30px;

      cursor:pointer;

      background: limegreen;
      color:#FFFFFF;
      border:1px solid limegreen;

      &:hover{
        background: #FFFFFF;
        color:limegreen;
      }
    }
    margin-top:30px;
    margin-bottom:20px;
  }
}

.listTask{
  display:flex;
  flex-direction:column;
  align-items:center;

  .task{
    display:flex;

    .taskContent{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:16px;
      margin-bottom: 20px;
      width:40vw;

      background-color: #ececec;
      color:#333333;

      &__input{
        .field{
          margin: 0
        }
      }
      &__button{

        .done{
          background:limegreen;
          color:#FFFFFF;
          border:1px solid limegreen;

          &:hover{
            background:#FFFFFF;
            color:limegreen;
          }
        }

        .edit{
          background: #d59117;
          color:#FFFFFF;
          border:1px solid #d59117;
          &:hover{
            background: #FFFFFF;
            color:#d59117;
          }
        }

        .delete{
          background:#cd1537;
          color:#FFFFFF;
          border:1px solid #cd1537;

          &:hover{
            background:#FFFFFF;
            color:#cd1537;
          }
        }
        button{
          margin:3px;
          padding:8px;
          border:none;

          cursor:pointer;

          width:55px;
        }
      }
    }
  }
}

@media screen and (max-width:1000px) {
  .mainTodo{
    .listTask{
      .task{
        .taskContent{
          width:80vw;
          flex-direction:column;

          &__button{
            margin-top:20px;
            display:flex;
            flex-direction:row;
          }
        }
      }
    }
    .inpTodo{
      .field{
        margin:0;
      }
    }
  }
}
</style>
