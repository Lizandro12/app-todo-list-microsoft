<template>
    <div class="task__container">
        <div class="new__task__header">
            <div class="header__box1">
                <img :src="home" :alt="homealt" class="icon icon_home">
                <h1 class="header__box1-title">Importantes</h1>
                <span>...</span>
            </div>
            <div class="header__box2">
                <div>
                    <img :src="order" :alt="orderalt" class="order">
                    <span>Ordenar</span>
                </div>
            </div>
        </div>
        
        <!-- Este componente é usado para mostrar uma mensagem de erro -->
        <MessageAlert :msg="msg" v-show="msg" />
        <SuccessMessage :msg="successmsg" v-show="successmsg" />

        <div class="form">
            <div class="form__container">
                <div class="input__container">
                    <input type="text" name="tarefa" id="tarefa" placeholder="Adicionar uma tarefa" v-model="task" @keyup.enter="createTask()" ref="textInput">
                </div>
                <div class="form__footer">
                    <div class="form__footer-icons">
                        <img :src="daterange" alt="" class="date">
                        <img :src="bell" alt="" class="bell">
                        <img :src="horizontalswitch" alt="" class="horizontal">
                    </div>
                    <div>
                        <button class="add__task__btn" @click.prevent="createTask()">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="line"></div>

        <div class="task__content" v-for="(task, index) in tasks" :key="index">
            <div class="task">
                <div @click.prevent="updateStatus(task, index)" class="">
                    <div v-if="!task.completed" class="circle"></div>
                    <div v-else class="circle__completed">
                        <img :src="completed" alt="" class="completed__img">
                    </div>
                </div>
                <span class="task__text">{{ task.title }}</span>
            </div>
            <div @click.prevent="updateFavorite(task, index)" >
                <img v-if="!task.favorite" :src="importanticontask" :alt="importanticonalt" class="icon__important">
                <img v-else :src="importanticontaskcolor" :alt="importanticonaltcolor" class="icon__important">
            </div>
        </div>
    </div>
</template>

<script>

/* Importação dos componentes */
import MessageAlert from './MessageAlert.vue';
import SuccessMessage from './SuccessMessage.vue'
/* Importação do axios */
import axios from 'axios';



/* Axios cria a url base para usar a API */
const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export default {
    name: "AllImportantTasks",
    components: {
        MessageAlert,
        SuccessMessage
    },
    data(){
        return {
            msg:null,
            successmsg:null,
            tasks: [],
            task: null,
            taskToEditName: {},
            indexOfTaskToEditName: null
        }
    },
    methods: {
        /* Este metodo busca as tarefas no banco de dados por meio de uma querisição a API */
        getTasks(){
            api.get('/importants').then((response) => {
                this.tasks = response.data;
            })
        },

        createTask(){
            

            if(this.task == "" || this.task == null || this.task == undefined) {

                this.msg = "O campo adicionar uma tarefa deve ser preenchido";
                setTimeout(()=>{
                    this.msg = "";
                },3500);

            }else{
                this.addNewTask();
            }
        },

        addNewTask() {
            const data = {
                    task_id: Math.floor(Math.random()*100),
                    title: this.task,
                    completed: false,
                    favorite: true
                }

                api.post('/newtaskimportant', data).then( (response) => {
                    this.tasks = response.data;
                });
                
                this.$refs.textInput.focus();
                this.task = "";

                this.successmsg = "Tarefa adicionada com sucesso";
                setTimeout(()=>{
                    this.successmsg = "";
                },3000)

        },

        updateStatus(task, index){
            const data = {
                completed: !task.completed
            }

            api.patch(`/editstatus/${task.id}`, data).then( (response) => this.tasks.splice(index, 1));

        },
        updateFavorite(task, index){
            const data = {
                favorite: !task.favorite
            }

            api.patch(`/editfavorite/${task.id}`, data).then( (response) => this.tasks.splice(index, 1));
        }
    },
    mounted(){
        this.$refs.textInput.focus();
        this.getTasks();
        },
    props: [
        "home",
        "homealt",
        "order",
        "orderalt",
        "group",
        "groupalt",
        "daterange",
        "bell",
        "horizontalswitch",
        "importanticontask",
        "importanticonalt",
        "importanticontaskcolor",
        "importanticonaltcolor",
        "completed"
    ]
}

</script>

<style scoped>

.task__container{
    width: 100%;
    height: 100vh;
    padding: 26px;
    transition: all 0.5s;
}

.new__task__header{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.icon{
    width: 35px;
    height: 35px;
}

.order,
.group,
.date,
.bell,
.horizontal,
.icon__important{
    width: 25px;
    height: 25px;
    cursor: pointer;
}

.icon_order{
    font-size: 25px;
}
.header__box1{
    display: flex;
    align-items: center;
    color: #2564CF;
    gap: 7px;
    position: relative;
}

.header__box1 span{
    color: #868583;
    font-size: 1.5rem;
    position: relative;
    top: -8px;
}

.header__box1-title{
    font-size: 1.5rem;
}

.header__box2{
    display: flex;
    gap: 1.8rem;
}

.header__box2 div{
    display: flex;
    align-items: center;
    gap: 1.1rem;
    cursor: pointer;
}
.header__box2 div span{
    color: #2564CF;
}

.form{
    width: 100%;
    margin-top: 1.9rem;
}

.form__container{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.input__container{
    height: 65px;
    background-color: #ffffff;
    padding: 0.5rem;
    border-radius: 5px 5px 0 0 ;
    display: flex;
    border-bottom: 1px solid #86858349;
}

#tarefa{
    width: 100%;
    outline: none;
    border: none;
    padding: 0 0 0 1rem;
    color: #2564CF;
    font-size: 1rem;
}

#tarefa::placeholder{
    color: #2564CF;
}

.form__footer{
    height: 65px;
    background-color: #FAF9F8;
    box-shadow: 1.5px 7px 8px rgba(0, 0, 0, 0.068);
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 1.3rem;
}

.form__footer-icons{
    display: flex;
    gap: 0.5rem;
}

.add__task__btn{
    padding: 0.5rem;
    outline: none;
    border: solid 1px #86858349;
    font-weight: 700;
    cursor: pointer;
    color: #868583;
}

.line{
    margin-top: 3rem;
    border-bottom: 1px solid #86858349;
}

.task__content{
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.151);
    padding: 0 1rem 0 1.3rem;
    border-radius: 5px;
    margin-top: 1rem;
    transition: all .5s;
}

.task{
    display: flex;
    gap: 1rem;
}

.task__content:hover{
    background-color: #c0c0c010;
    cursor: pointer;
    transform: scale(1.01);
}

.circle{
  width: 18px;
  height: 18px;
  border: 1px #2564CF solid;
  border-radius: 50%;
  cursor: pointer;
}

.circle__completed{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #2564CF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.completed__img{
    width: 10px;
}
.task__text{
    color: #868583;
}

.icon__important{
    width: 18px;
    height: 18px;
}
</style>