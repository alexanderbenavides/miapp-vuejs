<template lang="pug">
  .main-container-accordion
    .container-view
        h4  {{ $t('projects') }} Javascript
        p Accordion hecho con solo javascript
        .container-accordion  
          .accordion-head
            div.grid-accordion.head-style-grid
              div 
              div Evualuación
              div Descripción
              div Tiempo promedio
          .accordion-body(v-for="(data,index) in dataAcordion")
            .js-accordionTrigger.grid-accordion.accordion-title( aria-expanded="false" aria-controls="accordion1")
                div {{data.evaluation}}
                div {{data.description}}
                div {{data.percentaje}}
            div.accordion-item.is-collapsed
              div(style="margin:1rem;")
                div.grid-accordion.grid-accordion-detail.head-style-grid
                  div Criterios
                  div Peso
                  div.grid-table-skills.grid-head-detail
                    div 
                       div.div-skills Escucha          
                    div 
                        div.div-skills Lee     
                    div  
                        div.div-skills Habla          
                    div 
                         div.div-skills Escribe          
                .grid-accordion.grid-accordion-detail.grid-body-detail(v-for="detail in data.dataDetail")
                    div {{detail.criteria}}
                    div {{detail.percentaje}}
                    div.grid-table-skills
                      div {{detail.skill1}}
                      div {{detail.skill2}}
                      div {{detail.skill3}}
                      div {{detail.skill4}}   
</template>

<script>

export default {
  name: 'Accordion',
    data() {
      return {
        dataAcordion:[
          {
            description: 'Avance del trabajo de investigación',evaluation:'Evaluación de entrada',percentaje:'10%',
            dataDetail: [
              {
                criteria: 'Participación activa en clase',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 
              },
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              },              
            ]
          },
          {
            description: 'Capacidad de comprender y aplicar los conocimientos en clases',evaluation:'Evaluación de conocimientos',percentaje:'40%',
            dataDetail: [
              {
                criteria: 'Participación activa en clase',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 
              },
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              },    
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              }                        
            ]
          },
          {
            description: 'Avance del trabajo de investigación',evaluation:'Evaluación parcial',percentaje:'10%',
            dataDetail: [
              {
                criteria: 'Participación activa en clase',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 
              },
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              },    
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              }  
            ]
          },
          {
            description: 'Capacidad de comprender y aplicar los conocimientos en clases',evaluation:'Evaluación de conocimientos',percentaje:'40%',
            dataDetail: [
              {
                criteria: 'Participación activa en clase',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 
              },
              {
                criteria: 'Participación activa en clase',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 
              },              
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              },    
              {
                criteria: 'Debate con propiedad',percentaje: '25',
                skill1:'20%', skill2: '40%',skill3: '30',skill4:'10%' 

              }  
            ],
          }
        ]
      };
    },
  mounted(){
    this.myAccordion();
  },
  methods:{
    toggleClasses(acc,sibling){
          acc.classList.toggle('is-collapsed');
          acc.classList.toggle('is-expanded');
          sibling.classList.toggle('is-collapsed');
          sibling.classList.toggle('is-expanded');
          sibling.classList.toggle('animateIn');
    },
    accordionSettings(acc,sibling,loop){
      let is_expanded = sibling.classList.contains('is-expanded');
      if (!loop) {
       this.toggleClasses(acc,sibling);
       this.addAtrribute(acc,sibling,!is_expanded);      
       return loop;
      }

      if (is_expanded) {
          this.toggleClasses(acc,sibling);
          this.addAtrribute(acc,sibling,!is_expanded);      

      }
    

    
 
    },
   addAtrribute(el1, el2, expanded){
          let setAriaAttr = function(el, ariaType, newProperty){
            el.setAttribute(ariaType, newProperty);
        };     
        switch(expanded) {
          case true:
            setAriaAttr(el1, 'aria-expanded', 'true');
            setAriaAttr(el2, 'aria-hidden', 'false');
            break;
          case false:
            setAriaAttr(el1, 'aria-expanded', 'false');
            setAriaAttr(el2, 'aria-hidden', 'true');
            break;
          default:
            break;
        }
    },
    myAccordion(){
        let _this_vue = this;
        var d = document,
        accordionToggles = d.getElementsByClassName('js-accordionTrigger'),
        switchAccordion;

       //function
      switchAccordion = function(e) {
          e.preventDefault();
          for (var i=0,len=accordionToggles.length; i<len; i++) {
            if(accordionToggles[i] != this){
              _this_vue.accordionSettings(accordionToggles[i], accordionToggles[i].nextSibling,true);
              accordionToggles[i].parentElement.classList.remove("body-active");
            }else{
              accordionToggles[i].parentElement.classList.toggle("body-active");
            }
          }                  
          _this_vue.accordionSettings(this,this.nextSibling);
        };
        for (var i=0,len=accordionToggles.length; i<len; i++) {
          accordionToggles[i].addEventListener('click', switchAccordion, true);
        }
    }
  }
};
</script>
<style lang="scss">
.main-container-accordion{
  .container-view{

.container-accordion {
  margin:0 auto;
  padding:1rem 0 1rem 0;
  .head-style-grid{
    border-radius: 15px 15px 0 0 ;
    background-color: var(--background-components); 
    color: var(--background-page) !important;
  }

  .accordion-body{
    &:nth-of-type(odd){
      .accordion-title{background-color: #f2f2f2;}
    }

    &:last-of-type{
    .accordion-title.is-expanded {
      border-radius: 0;
    }       
    .accordion-item.is-expanded {
      border-radius: 0 0 15px 15px;
      border: 1px solid var(--border-color);
    }
    .accordion-title{
    border-radius: 0 0 15px 15px;
    }
    }
    .grid-table-skills{
      display: grid;
      grid-template-columns: repeat(4,1fr);
    }
    .grid-head-detail{
      div{
        &:nth-last-of-type(1){
          @media screen and (max-width:640px){
            &::before {
            content: "ES";
            }
          }
        }
        &:nth-last-of-type(2){
          @media screen and (max-width:640px){
            &::before {
            content: "L";
            }
          }
        }   
        &:nth-last-of-type(3){
          @media screen and (max-width:640px){
            &::before {
            content: "H";
            }
          }
        } 
        &:nth-last-of-type(4){
          @media screen and (max-width:640px){
            &::before {
            content: "E";
            }
          }
        }                    
        @media screen and (max-width:640px){
          .div-skills{
            display: none;
          }
        }

      }
    }
    .grid-accordion-detail{
      display: grid;
      grid-template-columns: 3fr  1fr 3fr;
      grid-gap: .5rem;
    }
    .grid-body-detail{
      &:last-of-type{
        border-radius: 0 0 15px 15px;
      }
    }
    .accordion-title{
    background-color: var(--background-page);
    cursor: pointer; 
    &:before {
    content: "+";
    font-size:1.5em;
    line-height:0.5em;
    float:left; 
    transition: transform 0.3s ease-in-out;
    }
    }
    .accordion-title.is-expanded {
    &:before {
    transform:rotate(-225deg);
    }
    } 

  }
  .accordion-body.body-active + .accordion-body{
    .grid-accordion{
      border-top: 1px solid var(--border-color);
    }
  }
  .grid-accordion{
      font-weight:normal; 
      padding:1rem .5rem;
      text-decoration:none;
      color:var(--color-page);
      transition:background-color 0.5s ease-in-out;
      border:1px solid var(--border-color);
      border-top: 0;
      display: grid;
      grid-template-columns: 0.3fr 2fr 4fr 1fr;
      grid-gap: .5rem;
      align-items: center;
      text-align: center;
  }
  .accordion-item {
    height:auto;
    overflow:hidden;     
    max-height:50em;
    transition:max-height 1s;  
    border-left: 1px solid var(--border-color); 
    border-right: 1px solid var(--border-color);
    padding-left: 1rem;
    padding-right: 1rem;
      @media screen and (min-width:992) {
          max-height:15em;
          transition:max-height 0.5s       
      }
  }
  
  .accordion-item.is-collapsed {
      max-height:0;
  }
  .accordion-item.is-collapsed {
    max-height: auto;
  }
  .animateIn {
      animation: accordionIn 0.45s normal ease-in-out both 1; 
  }
  .animateOut {
      animation: accordionOut 0.45s alternate ease-in-out both 1;
  }

}
@keyframes accordionIn {
  0% {
    opacity: 0;
    transform:scale(0.9) rotateX(-60deg);
    transform-origin: 50% 0;
  }
  100% {
    opacity:1;
    transform:scale(1);
  }
}

@keyframes accordionOut {
    0% {
       opacity: 1;
       transform:scale(1);
     }
     100% {
          opacity:0;
           transform:scale(0.9) rotateX(-60deg);
       }
}
  }
}
</style>
