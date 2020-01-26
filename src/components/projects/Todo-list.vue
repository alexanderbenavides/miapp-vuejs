<template lang="pug">
  .main-container-todo
    .container-view
      h4 Todo-list
      .todo-grid-container
        div.header
          h2(style="margin:.5rem") Mi To Do List
          .container-inputs
            input(type="text" placeholder="Título..." v-model="title")
            input(type="text" placeholder="Descirpción..." v-model="description")
            span.button-page(@click="newElement") Agregar
        ul
          li(v-for="(todo,index) in todos")
            a
              div(style="display:flex;justify-content:flex-end;")
                i.el-icon-delete(@click="handleRemove(index)")
                i.el-icon-edit(@click="handleEdit(index)")
              h2 {{todo.title}}
              p {{todo.description}}

      el-dialog(
        :title="action"
        :visible.sync="dialogVisible"
        width="50%"
        center
        :fullscreen="false")
        p(v-if="action==='Eliminar tarea'" style="text-align: center;") ¿ Está seguro que desea eliminar la tarea {{task}} ?
        .container-inputs-modal(v-if="action==='Editar tarea'")
          input(type="text" placeholder="Título..." v-model="todos[index].title")
          input(type="text" placeholder="Descirpción..." v-model="todos[index].description")
        span(slot="footer" class="dialog-footer")
          span.button-page(v-if="action==='Eliminar tarea'" @click="confirmDelete(index)" style="background-color:#dc3545;") Eliminar
          span.button-page(v-if="action==='Editar tarea'" @click="confirmEdit(index)") Editar
</template>

<script>

export default {
  name: 'Todo-List',
  components: {
  },
  data(){
    return {
      index: '',
      task: '',
      action: '',
      dialogVisible: false,
      title: '',
      description: '',
      todos: [
        {
          title: 'Leer',
          description: 'Leer el capítulo 2 de Los perros hambrientos'
        }
      ]
    }
  },
  mounted(){
  },
  methods: {
      // Create a new list item when clicking on the "Add" button
       newElement() {
         if(this.description != 'null' && this.title != ''){
            this.todos.push({title: this.title, description: this.description});
            this.title = '';
            this.description = '';
         }
      },
      handleRemove(index){
        this.dialogVisible = true ;
        this.action = "Eliminar tarea";
        this.task = this.todos[index].title;
        this.index = index;
      },
      handleEdit(index){
        this.dialogVisible = true ;
        this.action = "Editar tarea";
        this.index = index;
      },
      confirmDelete(index){
        this.todos.splice(index, 1);
        this.dialogVisible = false ;
      },
      confirmEdit(){
            this.dialogVisible = false ;
      }
  }
};
</script>
<style lang="scss">
.main-container-todo{
  margin: 1rem;
  .container-inputs-modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
      margin: .5rem;
      width: 70%;
    }
  }
  .container-view{
    .todo-grid-container{
      /* Style the header */
      .header {
        background-color: var(--background-page);
        padding: 1rem;
        color: var(--color-page);
        text-align: center;
        border-radius: 15px;
        .container-inputs{
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           input{
             margin-bottom: 1rem;
           }
           @media screen and (min-width: 640px){
             flex-direction: row;
            justify-content: space-around;    
            input{
              margin-bottom: 0;
            }                     
           }
        }
      }
      /* Style the input */
      input {
        width: 80%;
        @media screen and(min-width:640px){
                width: 35%;
        }
      }

h2,p{
  font-size:100%;
  font-weight:normal;
}
ul,li{
  list-style:none;
}
ul{
  overflow:hidden;
  padding:3em;
}
ul li a{
  text-decoration:none;
  color: var(--color-page);
  background:#ffc;
  display:block;
  width:10em;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition:-moz-transform .15s linear;
  word-wrap: break-word;
}
ul li{
  margin:1em;
  float:left;
}
ul li a i {
  color: var(--background-components);
  cursor: pointer;
  display: none;
  position:relative;

}
ul li h2{
  font-size:24px;
  font-weight:bold;
  padding-bottom:10px;
}
ul li p{
  font-family:"Reenie Beanie",arial,sans-serif;
  font-size:20px;
}
ul li a{
  transform: rotate(-6deg);

}
ul li:nth-child(even) a{
  transform:rotate(4deg);
  position:relative;
  top:5px;
  background:#cfc;
}
ul li:nth-child(3n) a{
  transform:rotate(-3deg);
  position:relative;
  top:-5px;
  background:#ccf;
}
ul li:nth-child(5n) a{
  transform:rotate(5deg);
  position:relative;
  top:-10px;
}
ul li a:hover,ul li a:focus{
  box-shadow:10px 10px 7px rgba(0,0,0,.7);
  transform: scale(1.25);
  position:relative;
  z-index:5;
  i {
    display: block;
  }
}
ol{text-align:center;}
ol li{display:inline;padding-right:1em;}
ol li a{color:#fff;}   
    }
  }
}
</style>
