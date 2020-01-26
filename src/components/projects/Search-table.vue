<template lang="pug">
  .main-container-searchT
    .container-view
       h2 Filtro y buscador hecho con javascriptgit </h2>
       input(type="text" id="myInput" @keyup="searchTable" placeholder="Buscar tus clientes..." autocomplete ="off")
       table#myTable
        tr.header
          th Nombres 
            i.el-icon-arrow-up(v-if="is_arrow_up_active" @click="sortTable" style="cursor:pointer;")
            i.el-icon-arrow-down(v-if="is_arrow_up_active !== true " @click="sortTable" style="cursor:pointer;")
          th País
          th Ciudad
        tr(v-for="data in dataTable")
          td {{data.name}}
          td {{data.country}}
          td {{data.city}}

</template>

<script>

export default {
  name: 'Accordion',
    data() {
      return {
          is_arrow_up_active: true,
          dataTable : [
              {
                  name: 'Alexander Benavides',
                  country: 'Perú',
                  city: 'Lima',
              },
              {
                  name: 'Juan Alvarado',
                  country: 'Chile',
                  city: 'Santiago',
              },
              {
                  name: 'Dennis Noruega',
                  country: 'Argentina',
                  city: 'Buenos Aires',
              },
              {
                  name: 'José Palomino',
                  country: 'Ecuador',
                  city: 'Quito',
              },
              {
                  name: 'Eduardo Perez',
                  country: 'Brasil',
              }
          ]
      };
    },
    methods: {
        sortTable(){
            let is_true = this.is_arrow_up_active = !this.is_arrow_up_active;
           let data = '';
           if(is_true){
              data = this.dataTable.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
           }else{
              data = this.dataTable.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)); 
           }

           this.dataTable = data;

        },
        searchTable() {
            var input, filter, table, tr, i, x, tds, values = "",y,
            final_filter, final_value;
            
            input = document.getElementById("myInput");
            filter = input.value.toLowerCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");


            for (i = 0; i < tr.length; i++) {
            
                y = i;
            
            
                tds = tr[i].getElementsByTagName("td");
            
                if (tds.length > 0) {
            
                for (x = 0; x < tds.length; x++) {

                    if(i === y){
                
                    values =  values + tds[x].textContent || tds[x].innerText;
                    
                    final_value = values.replace(/\s/g, '').toLowerCase();
                    final_filter = filter.replace(/\s/g, '');    
                    
                    }
                

                }
                

                if (final_value.indexOf(final_filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }    


                }  
                
                values = "";

            }
        }
    }
};
</script>
<style lang="scss">
.main-container-searchT {
    width: 100%;
    margin-bottom: 1rem;
  .container-view {
    #myInput {
    display: flex;
    width: 80%;
    font-size: 16px;
    border: 1px solid var(--border-color);
    margin: 0 auto;
    margin-bottom: 12px;
    }

    #myTable {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid var(--border-color);
    font-size: 18px;
    }

    #myTable th, #myTable td {
    text-align: left;
    padding: 12px;
    }

    #myTable tr {
    border-bottom: 1px solid var(--border-color);
    }

    #myTable tr.header, #myTable tr:hover {
    background-color: var(--background-components);
    color: var(--background-page);
    } 
  }
   
}
</style>
