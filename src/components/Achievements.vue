<template lang="pug">
  .main-container-achievement
    .container-view
      h4 {{ $t('achievements') }}
      .home-grid-experience(v-for="achievement in $t('list_of_achievements')" )
          img#img_expetience(:src="require(`../assets/img/${achievement.logo}`)")
          .content-experience
            h3 {{achievement.tittle}}
            p {{achievement.description}}
            p {{achievement.company}}
            p {{achievement.prize}}
    <table hidden>
      <tr v-for="(table,i) in tables">
        <td>{{table.nombre}}</td>
        <td>
          <table>
            <tr>
              <th v-for="(t2,j) in table.table">{{j + 1}}</th>
            </tr>
            <tr>
              <td v-for="(tt,j) in tables[i].table">
                <input v-for="(dd,k) in tt.inputs" v-model="dd.input" @keyup="porcentajes(i,j,k)" :position="j"/> <br>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th v-for="(t2,t) in table.table"> {{t + 1}}</th>
            </tr>
          </table>           
        </td>
        <td>{{table.dato}}</td>
      </tr>
    </table>
</template>

<script>

export default {
  name: 'Logros',
  components: {
  },
  methods:{
    porcentajes(i,j,k){
      this.value = i;
      this.value2 = j;
      this.value3 = k;
    }
  },
  data(){
    return {
      value: '',
      value2: '',
      value3: '',
      tables: [
        {nombre: 'Germany', dato: 'Que te importa' ,
          table:[

          ]
        },
        {nombre: 'Germany', dato: 'Mañana me voy',
          table:[
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]
            },
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]              
            },
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]              
            },
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]              
            }
          ]
        },
        {nombre: 'Germany', dato: 'Estoy feliz',
          table:[
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]              
            },
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]
            },
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]              
            },
            {
              inputs: [
                {input:'10%'},
                {input:'10%'},
                {input:'80%'}
              ]              
            }           
          ]
        }
      ]
    }
  }
};
</script>

<style lang="scss">
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  //background-color: #dddddd;
}
</style>
