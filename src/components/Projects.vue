<template lang="pug">
  .main-container-projects
    Table
    //Acordeón
    Acccordion
    // Buscar en una tabla
    searchTable
    //Calendarios
    .container-view
       h4 Javascript : Paginación de calendarios académicos (Seleccionar fechas de exámen)
       .container-pagination-calendars
        a.btn-pagination#btn_prev(@click="prevPage") &laquo; Anterior 
        .container-calendars
            .content-calendar(v-for="(data,index) in calendarData")
              functional-calendar( 
                :marked-dates='marked_dates[index].dates'
                 v-model="calendarData[index]"
                 :monthNames="monthNames" 
                 :dayNames="dayNames" 
                 :is-multiple-date-picker='true' 
                 :ref="'Calendar'+index"
                 v-slot:default="props" 
                 :date-format="'yyyy-mm-dd'" 
                 class="calendar multiple"
                 :change-month-function="false"
                 :limits="{min: getNow(), max: ''}"
                 v-on:choseDay="clickDay"
                 )

        a.btn-pagination#btn_next(@click="nextPage") Siguiente&raquo;

        

    
    //Todo list
    TodoList
    //Projectos nodeJs                    
    .container-view
      h4 {{ $t('projects') }} Nodejs
      .home-grid-experience(v-for="project in $t('list_of_projects')" )
          img#img_expetience(:src="require(`../assets/img/${project.logo}`)")
          .content-projects
            h3 {{project.tittle}}
            p {{project.status}}
            p {{project.description}}
            p 
              a(:href="project.link_demo" target="_blank")  
                i.el-icon-view  {{project.see_demo}}
            p.p-see-video(v-if="project.has_video === 1 ") 
              i.el-icon-video-play(@click="centerDialogVisible = true")  {{project.video_demo[0].see_video}}    
    el-dialog(
      title="Video demostrativo"
      :visible.sync="centerDialogVisible"
      width="50%"
      center
      :fullscreen="false")
      p Video debajo contiene la explicación completa del proyecto
      <video width="100%" height="100%" controls preload="none">
        <source src="../assets/videos/chatbot.mp4" type="video/mp4">
      </video>  
</template>

<script>
import Acccordion from './projects/Accordion.vue';
import TodoList from './projects/Todo-list.vue';
import searchTable from './projects/Search-table.vue';
import { FunctionalCalendar } from 'vue-functional-calendar';
import Table from './projects/Table-list'
export default {
  name: 'projects',
    data() {
      return {
        marked_dates: [
          {
            dates : [
              "2019-12-16",
              "2019-12-17",
              "2019-12-18",
              "2019-12-19",
              "2019-12-20",
              "2019-12-21",
              "2019-12-22", 
              "2019-12-29",
              "2019-12-28",
              "2019-12-27", 
              "2019-12-26",
              "2019-12-25",
              "2019-12-24",
              "2019-12-23"
            ]
          },
          {
            dates : [
              "2020-1-21",
              "2020-1-22",
              "2020-1-23"
            ]
          },
          {
            dates : [

            ]
          },
          {
            dates : [

            ]
          },
          {
            dates : [

            ]
          }
        ],
        selected_days: false,
        new_calendar_data: false,
        dataFibonacci : [],
        centerDialogVisible: false,
        calendarData: [
          {},
          {},
          {},
          {},
          {},
        ],
        show_data: false,
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        dayNames: ['Lun', 'Mart', 'Miérc', 'Jue', 'Vier', 'Sáb', 'Dom'],	
        current_page : 1,
        records_per_page :2        
      };
    },
  components: {
    Acccordion,
    FunctionalCalendar,
    TodoList,
    searchTable,
    Table
  },
  mounted(){
    this.changePage(1);
    this.nextMonth();
    this.choseDate();

  },
  beforeUpdate(){
  },
  methods: {
    marketDates(){
      console.log(this.marked_dates);
      console.log(this.calendarData);

      let position = this.marked_dates.indexOf("-12-");
      console.log(position);

     // let data = this.calendarData; 
      for (let i = 0; i < 2; i++) {
       //console.log(i);
        
      }
    },
    clickDay(info){
      this.marketDates();

      let position = this.marked_dates.indexOf(info.date);

      if (position > -1) {
        this.marked_dates.splice(position, 1);
        
      }



      let day_names = ['Lun', 'Mart', 'Miérc', 'Jue', 'Vier', 'Sáb', 'Dom'];
      let selected_days = [] ;
      let data = this.calendarData;
      let date_selected, position_day;
      let final_array = [];


      for (let i = 0; i < data.length; i++) {

        if(data[i].selectedDates !== undefined){


          if(data[i].selectedDates.length > 0){

               final_array[i] = {};

            for (let j = 0; j < data[i].selectedDates.length; j++) {



               date_selected = new Date(data[i].selectedDates[j].date);               


               position_day = i === 0 ? date_selected.getDay() : date_selected.getDay() -1 === -1 ? 6 : date_selected.getDay() -1 ;


              if(selected_days.indexOf(day_names[position_day]) === -1) {


                selected_days[position_day] = day_names[position_day];

              }

               data[i].selectedDates[j].day = day_names[position_day];

               final_array[i][j] = data[i].selectedDates[j];
                 
               
              
            }


          }
        } 
      }

       this.new_calendar_data = final_array;
       this.selected_days = selected_days; 


    },
    getNow(){
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return date;
    },
    getToday(addMonth){
      let today = new Date();
      let month = today.getMonth()+1;
      let year = today.getFullYear();
      switch (addMonth) {
        case 2:
          if(month >= 11){
            year = year + 1;
            addMonth = (month + addMonth)-12;

          }else{
            addMonth = month + addMonth;
          }
          break;
        case 3:
            if(month >= 10){
              year = year + 1;
             addMonth =  (month + addMonth)-12;
            }else{
              addMonth = month + addMonth;
            }          
          break;
            
        default:
            if(month >= 9){
              year = year + 1;
              addMonth = (month + addMonth)-12;
            }else{
              addMonth = month + addMonth;
            } 
          break;
      }
      let date = year +'-'+ 0 + '' + addMonth+'-'+ today.getDate();
      return date
    },
    nextMonth() {
      this.$refs.Calendar1[0].NextMonth();
    },
    choseDate() {
      this.$refs.Calendar2[0].ChooseDate(this.getToday(2));
      this.$refs.Calendar3[0].ChooseDate(this.getToday(3));
      this.$refs.Calendar4[0].ChooseDate(this.getToday(4));
    },
    fibonacci(){
     let a = 1, b = 1 , aux =  a + b, x ;
     let fibonacci = [];
      fibonacci.push(a);
      fibonacci.push(b);

      for ( x = 0; x < aux; x++) {
        fibonacci.push(aux);
        aux = b + aux;
        b = aux - b; 

        if(x === 15) {
        this.dataFibonacci = fibonacci;
          return;
        }
        
      }

    },
    sendata(val){
      this.fibonacci();
      this.show_data = val;

    },
    nextPage()
      {
      if (this.current_page < this.numPages()) {
      this.current_page++;
      this.changePage(this.current_page);
      }
    },
    prevPage()
    {
        if (this.current_page > 1) {
            this.current_page--;
            this.changePage(this.current_page);
        }
    },
    changePage(page)
    {
        let btn_next = document.getElementById("btn_next");
        let btn_prev = document.getElementById("btn_prev");      
        let content_calendar = document.getElementsByClassName("content-calendar");
        let container_calendar = content_calendar[0].parentElement;
        container_calendar.style.gridTemplateColumns = 'repeat(2,1fr)';

        if (page < 1) page = 1;
        if (page > this.numPages()) page = this.numPages();

        for (let index = 0; index < this.calendarData.length; index++) {
            content_calendar[index].setAttribute("hidden", true);
        }
        for (let i = (page-1) * this.records_per_page; i < (page * this.records_per_page); i++) {
          if(i != this.calendarData.length){
            content_calendar[i].removeAttribute("hidden");
          }else{
            container_calendar.style.gridTemplateColumns = '1fr'
          }
        }
          if (page == 1) {
              btn_prev.style.visibility = "hidden";
          } else {
              btn_prev.style.visibility = "visible";
          }

          if (page == this.numPages()) {
              btn_next.style.visibility = "hidden";
          } else {
              btn_next.style.visibility = "visible";
          }        

    },

    numPages()
    {
        return Math.ceil(this.calendarData.length / this.records_per_page);
    },

  }
};
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);
.main-container-projects{
  .container-view{
    @media screen and (min-width: 992px) {
      .responsable-grid-7 {
        grid-template-columns: 1fr 1fr 1fr 4fr 1fr 1fr 1.5fr;
      }
    }
    .container-pagination-calendars{
      text-align: center;
      margin: 1rem;
      @media screen and(min-width:640px){
        display: grid;
        grid-template-columns: .3fr 2fr .3fr;
        align-items: center;
        grid-gap: 1rem;
      }
      .btn-pagination {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
        cursor: pointer;
      }

      .btn-pagination:hover {
        background-color: #ddd;
        color: var(--color-page);
      }

      #btn_prev {
        background-color: #f1f1f1;
        color: var(--color-page);
        border-radius: 10px 0 0 10px;        
      }

      #btn_next {
        background-color: var(--background-components);
        color: white;
        border-radius:  0 10px 10px 0 ;        
      }    
      .container-calendars{
        .content-calendar{
            margin: .5rem;
            .vfc-cursor-pointer{
              display: none;
            }
            .vfc-arrow-left{
              display: none;
            }
            .vfc-hide {
              pointer-events: none;
            }
            .vfc-cursor-not-allowed {
              pointer-events: none;
            }
            .vfc-span-day {
              cursor: pointer;
            }
        }
        @media screen and(min-width:640px){
          display: grid;
          grid-template-columns: repeat(2,1fr);
          grid-gap: .5rem;
         .content-calendar{
           margin: 0;
         }         
        }        
      }      
  }

  .home-grid-experience{
    .content-projects{
      p {
        i{
          cursor: pointer;
        }

      }
    }
  }
  }
}
</style>
