<template>
    <nav class="navigation">
      <div class="icons">
        <img :src="menu" :alt="altmenu" class="icon icon__menu">
        <img :src="settings" :alt="altmenu" class="icon icon__settings">
      </div>
  
      <ul class="ul">
  
        <li class="ul__item" class-active="active">
          <img :src="tasks" :alt="alttasks" class="icon icon__task">
          <router-link  to="/">Meu dia</router-link>
        </li>
        <li class="ul__item">
          <img :src="finished" :alt="altfinished" class="icon icon__finished">
          <router-link to="/concluidas">Concluídas</router-link>
        </li>
        <li class="ul__item">
          <img :src="important" :alt="altimportant" class="icon icon__important">
          <router-link to="/importantes">Importantes</router-link>
        </li>
        <div class="line"></div>
        <div class="ul__item item-box1">
          <div class="ul__item-group">
            <img :src="newlist" :alt="altnewlist" class="icon icon__tashed">
            <span class="ul__item__text">Nova Lista</span>
          </div>
          <img :src="itemgroup" :alt="itemgroupalt" class="icon icon__item__list">
        </div>
      </ul>
    </nav>
  </template>
  
  <script>

import axios from 'axios';



/* Axios cria a url base para usar a API */
const api = axios.create({
  baseURL: 'http://localhost:3001'
})

  
  export default {
      name: "NavigationBar",
      props: [
        "menu",
        "altmenu",
        "settings",
        "altsettings",
        "tasks",
        "finished",
        "alttasks",
        "altfinished",
        "important",
        "altimportant",
        "assigned",
        "newlist",
        "altnewlist",
        "itemgroup",
        "itemgroupalt"
      ]
  }
  </script>
  
  <style scoped>
  
  .navigation{
    display: flex;
    flex-direction: column;
  }
  
  .ul{
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 0 0;
  }
  
  a{
    text-decoration: none;
    color: #868583;
    transition: all.5s;
  }
  
  a:hover{
    color:#2564CF ;
  }
  
  .icons{
    display: flex;
    justify-content: space-between;
    padding: 35px 35px 0 35px;

  }
  
  .icon{
    width: 25px;
    cursor: pointer;
  }
  
  
  .ul__item{
    display: flex;
    align-items: center;
    gap: 1.3rem;
    padding: 15px 35px;
    cursor: pointer;
  }

.ul__item:hover{
  background-color: #FAF9F8;
  }

.item-box1:hover{
  background-color: transparent !important;
  }
  
  .item-box1{
    justify-content: space-between;
  }
  
  
  .ul__item-group{
    display: flex;
    align-items: center;
    gap: 1.3rem;
    padding: 0.5rem 2rem 0.5rem 0;
    width: auto;
    transition: .5s;
  
  }
  
  .ul__item-group:hover{
    background-color: #2563cf11;
    cursor: pointer;
  }
  
  .line{
    margin-top: 1.2rem;
    border-bottom: 1px solid #86858380;
  }
  
  .ul__item__text{
    color: #2564CF;
  }
  
  .icon__important,
  .icon__finished,
  .icon__task{
    width: 6.8%;
  }
  
  </style>