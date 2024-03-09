<template>
  <div class="important__tasks">
    <all-important-tasks :home="important_color_icon" :homealt="home_icon_alt" :order="order_icon" :orderalt="order_alt" :group="group_icon" :groupalt="group_alt" :daterange="date_range" :bell="bell_icon" :horizontalswitch="horizontal_switch" :importanticontask="important_tasks" :importanticonalt="alt_important_tasks" :completed="completed_icon" :importanticontaskcolor="importante_icon_color" />
  </div>
</template>
  
  <script>
import AllImportantTasks from '../components/AllImportantTasks.vue'
  
  export default {
    name: 'TarefasImportantes',
    data(){
      return {
        important_color_icon: "/img/important-border-color.png",
        home_icon_alt: "Icone do home",
        order_icon: "/img/order.png",
        order_alt: "Icone de ordenação",
        group_icon: "/img/groups.png",
        group_alt: "Icone de criação de Grupos",
        date_range: "/img/date_range_duotone.png",
        bell_icon: "/img/bell.png",
        horizontal_switch: "/img/horizontal_switch.png",
        important_tasks: "/img/important.png",
        alt_important_tasks: "Icone de tarefas importantes",
        completed_icon: "img/completed_icon.png",
        importante_icon_color: "img/important-color.png"
      }
    },
    components: {
        AllImportantTasks
    }
  }
  </script>

<style>

.important__tasks{
  width: 90%;
}
</style>