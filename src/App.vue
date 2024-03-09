<template>
  <div class="container__toDo">
    <div class="container__navigation">
      <NavigationBar :menu="hamburger" :altmenu="menu_alt" :settings="icon_settings" :altsettings="settings_alt" :tasks="task" :alttasks="task_alt" :finished="finish" :altfinished="finished_alt" :important="important_icon" :altimportant="important_icon_alt" :assigned="assignedtome" :alttashed="deleted_alt" :newlist="newlists" :altnewlist="alt_newlist" :itemgroup="listitem" :itemgroupalt="listitemalt" :completed="completed_icon"/>
    </div>
      <router-view class="view" />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name:"App",
  data(){
      return  { 
        hamburger: "/img/hamburger-menu.png",
        menu_alt: "Icone de menu hamburger",
        icon_settings: "/img/settings.png",
        settings_alt: "Icone de menu hamburger",
        task: "/img/myday.png",
        task_alt: "Icone de home",
        finish: "/img/finished.png",
        finished_alt: "Icone de tarefa finalisada",
        assignedtome: "/img/assignedtome.png",
        deleted_alt: "Icone de tarefa apagada",
        newlists: "img/new-list.png",
        alt_newlist:" Icone de nova lista",
        listitem: "/img/list.png",
        listitemalt:"Icon de add list", 
        important_icon: "/img/important_menu.png",
        important_icon_alt: "Icone de tarefa importante do menu",
      }
  },
  components: {
    NavigationBar
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.container__toDo{
  display: flex;
  background-color: #FAF9F8;
}

.container__navigation{
  position: fixed;
  background-color: #ffffff;
  width: 347px;
  height: 100vh;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
}

.view{
  margin-left: 350px;
}
</style>
