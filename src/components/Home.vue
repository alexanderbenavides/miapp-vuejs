<template lang="pug">
  div.main-container-home
    .container-view(style="padding: 1rem;" )
      span.button-page(@click="showResults") Mostrar
    .container-view
      h3 {{ about }}
      p {{ summary }}
    .container-view
      h4 {{ $t('experience') }}
      .home-grid-experience(v-for="experience in $t('experiences')" )
          img#img_expetience(:src="require(`../assets/img/${experience.logo}`)")
          .content-experience
            h3 {{experience.cargo}}
            p {{experience.empresa}}
            p {{experience.periodo}}
            p {{experience.ubicacion}}
            p {{experience.descripcion}}
    .container-view
      h4 {{ $t('education') }}
      .home-grid-experience(v-for="data_edu in $t('list_education')" )
          img#img_expetience(:src="require(`../assets/img/${data_edu.logo}`)")
          .content-experience
            h3 {{data_edu.studies_center}}
            p {{data_edu.description}}         
            p {{data_edu.year_start_end}}         
</template>

<script>
import XLSX from "xlsx";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // We will make a Workbook contains 2 Worksheets
      jsonOriginal: {
        estado: "ok",
        info: {
          data: {
            current_page: 1,
            data: [
              {
                id: 1325,
                codigolms: "H0002522",
                u_fullname: "EDUARDO FABIO GONZALES",
                u_mail_mailing: "egonzalesl@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: ["01-04-2020", "01-04-2020"],
                  calendario: ["01-04-2020", "01-04-2020"],
                  plan_estudios: ["01-04-2020", "01-04-2020"],
                  secciones: [
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: ["15-04-2020"]
                    },
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: ["15-04-2020"]
                    }
                  ]
                }
              },
              {
                id: 1335,
                codigolms: "20112350",
                u_fullname: "RUTH JOHANNA POWOSINO PAUCARIMA",
                u_mail_mailing: "jpowosino@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 2,
                  competencias: ["01-04-2020", "01-04-2020"],

                  calendario: ["01-04-2020", "01-04-2020"],
                  plan_estudios: [],
                  secciones: [
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: ["15-04-2020"]
                    }
                  ]
                }
              },
              {
                id: 502,
                codigolms: "20105653",
                u_fullname: "Lía Mejía Lozano",
                u_mail_mailing: "lia.mejia@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: ["01-04-2020"],
                  plan_estudios: ["27-03-2020"],
                  secciones: [
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: ["15-04-2020"]
                    },
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: ["15-04-2020"]
                    }
                  ]
                }
              },
              {
                id: 1355,
                codigolms: "20121836",
                u_fullname: "VANESSA VIVIANA PÉREZ",
                u_mail_mailing: "perez.vanessa@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: [
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: ["15-04-2020"]
                    },
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: ["15-04-2020"],
                      vista_rae: [
                        "03/05/2020",
                        "04/05/2020",
                        "05/05/2020",
                        "06/05/2020",
                        "07/05/2020",
                        "08/05/2020",
                        "09/05/2020",
                        "10/05/2020",
                        "11/05/2020"
                      ]
                    }
                  ]
                }
              },
              {
                id: 1353,
                codigolms: "20135164",
                u_fullname: "LUCERO DE LA",
                u_mail_mailing: "ldelacruzo@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: [
                    {
                      id: 5,
                      nombre: "Python desde cero 2019 - II / 1202",
                      vista_silabo_curso: 1,
                      vista_notas: [
                        "15-04-2020",
                        "04/05/2020",
                        "05/05/2020",
                        "06/05/2020",
                        "07/05/2020",
                        "08/05/2020",
                        "09/05/2020",
                        "10/05/2020",
                        "11/05/2020"
                      ],
                      vista_rae: ["03/05/2020"]
                    }
                  ]
                }
              },
              {
                id: 1354,
                codigolms: "20143050",
                u_fullname: "SERGIO ALEJANDRO REYES",
                u_mail_mailing: "reyes.sergio@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1372,
                codigolms: "20150145",
                u_fullname: "BRUNO MAINETTO REATEGUI",
                u_mail_mailing: "bruno.mainetto@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1379,
                codigolms: "20150423",
                u_fullname: "VANESSA MARNYE VERGARA",
                u_mail_mailing: "vanessa.vergara@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1380,
                codigolms: "20152862",
                u_fullname: "Lucero Cordova",
                u_mail_mailing: "lucero.cordova@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1363,
                codigolms: "20155528",
                u_fullname: "SHANEL TREJO",
                u_mail_mailing: "a20155528@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1362,
                codigolms: "20155766",
                u_fullname: "Junior Melendez",
                u_mail_mailing: "junior.melendez@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 389,
                codigolms: "20156117",
                u_fullname: "María Yesenia Olivares Vicente",
                u_mail_mailing: "molivares@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1349,
                codigolms: "20161328",
                u_fullname: "ITALO GABRIEL GARCÍA",
                u_mail_mailing: "italo.garcia@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1358,
                codigolms: "20161459",
                u_fullname: "GONZALO NEGRETE GIRANO",
                u_mail_mailing: "gonzalo.negrete@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1361,
                codigolms: "20162643",
                u_fullname: "GUSTAVO CRISTHIAN COQUIL",
                u_mail_mailing: "gustavo.coquil@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1378,
                codigolms: "20163056",
                u_fullname: "Nicole Jacobo",
                u_mail_mailing: "nicole.jacobo@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1360,
                codigolms: "20163394",
                u_fullname: "JOY MANUEL POLICIO",
                u_mail_mailing: "jpolicio@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1385,
                codigolms: "20163438",
                u_fullname: "Mirella Reyes Cueva",
                u_mail_mailing: "mirella.reyes@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1377,
                codigolms: "20163439",
                u_fullname: "CLAUDIA CECILIA ESPINOZA TARAZONA",
                u_mail_mailing: "claudia.espinoza@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1368,
                codigolms: "20166231",
                u_fullname: "BRENDA KARINA MADRID",
                u_mail_mailing: "bmadrida@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1367,
                codigolms: "20202966",
                u_fullname: "FRANCE ESCHBACH ARCE",
                u_mail_mailing: "a20202966@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1351,
                codigolms: "20091515",
                u_fullname: "Roxana Mavel Torres",
                u_mail_mailing: "mavel.torres@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1397,
                codigolms: "20115102",
                u_fullname: "IRIS BEATRIZ MATA",
                u_mail_mailing: "iris.matah@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1383,
                codigolms: "20132927",
                u_fullname: "VICTOR SUAREZ DIPAS",
                u_mail_mailing: "suarez.victor@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1376,
                codigolms: "20134809",
                u_fullname: "Dagmar Camila Chang",
                u_mail_mailing: "camila.chang@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1381,
                codigolms: "20140898",
                u_fullname: "JOSE RODRIGUEZ",
                u_mail_mailing: "a20140898@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1350,
                codigolms: "20142924",
                u_fullname: "ALEXANDRA MARCELO ATENCIO",
                u_mail_mailing: "alexandra.marcelo@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1396,
                codigolms: "20143182",
                u_fullname: "ANTHONY LOWELL HUERTA",
                u_mail_mailing: "ahuertab@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1356,
                codigolms: "20151059",
                u_fullname: "Estefany Sofia Navarro",
                u_mail_mailing: "esnavarroc@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 10007,
                codigolms: "20110944",
                u_fullname: "Joselyn Cañamero Quintana",
                u_mail_mailing: "joselyna.canamero@pucp.pe",
                indicadores: {
                  ficha_completada: 2,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: ["05-04-2020", "05-04-2020", "05-04-2020"],
                  calendario: ["05-04-2020"],
                  plan_estudios: ["05-04-2020"],
                  secciones: []
                }
              },
              {
                id: 1370,
                codigolms: "20152930",
                u_fullname: "LADY CHANDUVI",
                u_mail_mailing: "lady.chanduvi@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 2,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1389,
                codigolms: "20111430",
                u_fullname: "FELIPE CASTRO BARRETO",
                u_mail_mailing: "castro.felipe@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1374,
                codigolms: "20155376",
                u_fullname: "NICOLE ISABEL RUBIO",
                u_mail_mailing: "nicole.rubio@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 211,
                codigolms: "20120623",
                u_fullname: "Azucena Alvarez Huaman",
                u_mail_mailing: "azucena.alvarez@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1366,
                codigolms: "20155730",
                u_fullname: "Paola Elena Quispe",
                u_mail_mailing: "a20155730@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1699,
                codigolms: "20130050",
                u_fullname: "JOSEPHINE ALMEIDA FLÓREZ",
                u_mail_mailing: "a20130050@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 121,
                codigolms: "20132995",
                u_fullname: "Geraldine Nicole Caldas Silva",
                u_mail_mailing: "geraldine.caldas@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 2,
                  competencias: [],
                  calendario: ["05-04-2020"],
                  plan_estudios: ["05-04-2020"],
                  secciones: []
                }
              },
              {
                id: 1352,
                codigolms: "20160252",
                u_fullname: "Alexandra Nathaly Cesti Palomino",
                u_mail_mailing: "alexandra.cesti@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1364,
                codigolms: "20135485",
                u_fullname: "BRIGGITH ALISON LUJAN",
                u_mail_mailing: "alison.lujan@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1388,
                codigolms: "20141170",
                u_fullname: "JUAN CARLOS LENGUA ABANTO",
                u_mail_mailing: "lengua.j@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1707,
                codigolms: "20141325",
                u_fullname: "Cristian Shupingahua",
                u_mail_mailing: "c.shupingahua@pucp.pe",
                indicadores: {
                  ficha_completada: 2,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: ["05-04-2020"],
                  plan_estudios: ["05-04-2020"],
                  secciones: []
                }
              },
              {
                id: 1393,
                codigolms: "20141486",
                u_fullname: "Cinthia Yesenia Flores",
                u_mail_mailing: "cinthia.floresr@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1706,
                codigolms: "20141497",
                u_fullname: "Javier Guevara Asencios",
                u_mail_mailing: "javier.guevara@pucp.pe",
                indicadores: {
                  ficha_completada: 2,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1357,
                codigolms: "20166176",
                u_fullname: "Álvaro Carrasco Alarcón",
                u_mail_mailing: "a20166176@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1384,
                codigolms: "20170482",
                u_fullname: "JENNIFER SOFIA VIDAL RUIZ",
                u_mail_mailing: "jennifer.vidalr@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1394,
                codigolms: "20142963",
                u_fullname: "Meylin Flores",
                u_mail_mailing: "meylin.flores@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1698,
                codigolms: "20145452",
                u_fullname: "KATHERINE SHEILA APOLINARIO AVILA",
                u_mail_mailing: "apolinario.s@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 1,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1697,
                codigolms: "20145865",
                u_fullname: "ANYELLA PATRICIA PÉREZ",
                u_mail_mailing: "anyella.perezg@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 0,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 1369,
                codigolms: "20145925",
                u_fullname: "CAROLINA ZEA TICONA",
                u_mail_mailing: "carolina.zea@pucp.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 0,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              },
              {
                id: 220,
                codigolms: "20145951",
                u_fullname: "Arlyn Salinas Urteaga",
                u_mail_mailing: "arlyn.salinasu@pucp.edu.pe",
                indicadores: {
                  ficha_completada: 0,
                  foto_act: 0,
                  exp_digital_basico: 1,
                  exp_digital_complementario: 1,
                  competencias: [],
                  calendario: [],
                  plan_estudios: [],
                  secciones: []
                }
              }
            ],
            first_page_url: "http://api.2flock.com/indicators/students?page=1",
            from: 1,
            last_page: 2,
            last_page_url: "http://api.2flock.com/indicators/students?page=2",
            next_page_url: "http://api.2flock.com/indicators/students?page=2",
            path: "http://api.2flock.com/indicators/students",
            per_page: 50,
            prev_page_url: null,
            to: 50,
            total: 64
          },
          status: 200,
          name: "OK",
          message: "Se han encontrado los alumnos."
        }
      },
      about: "Acerca de mí",
      summary:
        "Egresado de la carrera de Ingeniería de sistemas empresariales de la Universidad Científica del Sur. Actualmente laborando en el Centro de Innovación y Desarrollo Emprendedor de la Pontificia Universidad Católica del Perú."
    };
  },
  methods: {
    showResults() {
      this.JSONToExcelConvertor();
    },
    JSONToExcelConvertor() {
      // export json to Worksheet of Excel
      // only array possible
      const jsonToModify = this.jsonOriginal.info.data.data;

      /// Data of the following array would appear in excel in sheets
      const expDigitalData = [];
      const competenciasData = [];
      const calendarioData = [];
      const planEstudiosData = [];
      const vistaNotasData = [];
      const vistaRaesData = [];

      //get all dates to separate in colums in excel
      const fechasCompetencias = [];
      const fechasCalendario = [];
      const fechasPlanEstudio = [];
      const fechasVistaNota = [];
      const fechasVistaRaes = [];

      // get max Length of dates to loop through in excellColumns() method
      let maxLengthCompetencia = -1;
      let maxLengthCalendario = -1;
      let maxLengthPlanEstudio = -1;
      let maxLengthVistaNota = -1;
      let maxLengthVistaRaes = -1;

      jsonToModify.map(data => {
        expDigitalData.push({
          Codigo: data.codigolms,
          Alumno: data.u_fullname,
          Correo: data.u_mail_mailing,
          "Ficha completa": data.indicadores.ficha_completada,
          "Foto actualizada": data.indicadores.foto_act,
          "Exp D básico": data.indicadores.exp_digital_basico,
          "Exp D complementario": data.indicadores.exp_digital_complementario
        });

        //  fechas competencias
        fechasCompetencias.push(data.indicadores.competencias);

        if (maxLengthCompetencia < data.indicadores.competencias.length) {
          maxLengthCompetencia = data.indicadores.competencias.length;
        }

        competenciasData.push({
          Codigo: data.codigolms,
          Alumno: data.u_fullname,
          Competencias: data.indicadores.competencias.length
            ? data.indicadores.competencias[0]
            : ""
        });

        //  fechas Calendario
        fechasCalendario.push(data.indicadores.calendario);

        if (maxLengthCalendario < data.indicadores.calendario.length) {
          maxLengthCalendario = data.indicadores.calendario.length;
        }

        calendarioData.push({
          Codigo: data.codigolms,
          Alumno: data.u_fullname,
          calendario: data.indicadores.calendario.length
            ? data.indicadores.calendario[0]
            : ""
        });

        //  fechas Calendario
        fechasPlanEstudio.push(data.indicadores.plan_estudios);

        if (maxLengthPlanEstudio < data.indicadores.plan_estudios.length) {
          maxLengthPlanEstudio = data.indicadores.plan_estudios.length;
        }
        planEstudiosData.push({
          Codigo: data.codigolms,
          Alumno: data.u_fullname,
          calendario: data.indicadores.plan_estudios.length
            ? data.indicadores.plan_estudios[0]
            : ""
        });

        if (data.indicadores.secciones.length === 0) {
          fechasVistaNota.push([""]);
          fechasVistaRaes.push([""]);

          vistaNotasData.push({
            Codigo: data.codigolms,
            Alumno: data.u_fullname,
            Sección: "",
            visita: "",
            "Vista notas": ""
          });
          vistaRaesData.push({
            Codigo: data.codigolms,
            Alumno: data.u_fullname,
            Sección: "",
            visita: "",
            "Vista rae": ""
          });
        } else {
          data.indicadores.secciones.map(seccion => {
            //  fechas vistaNota
            fechasVistaNota.push(seccion.vista_notas);
            if (maxLengthVistaNota < seccion.vista_notas.length) {
              maxLengthVistaNota = seccion.vista_notas.length;
            }

            //  fechas vistaraes
            fechasVistaRaes.push(seccion.vista_rae);
            if (maxLengthVistaRaes < seccion.vista_rae.length) {
              maxLengthVistaRaes = seccion.vista_rae.length;
            }

            vistaNotasData.push({
              Codigo: data.codigolms,
              Alumno: data.u_fullname,
              Sección: seccion.nombre,
              visita: seccion.vista_silabo_curso,
              "Vista notas": seccion.vista_notas.length
                ? seccion.vista_notas[0]
                : ""
            });
            vistaRaesData.push({
              Codigo: data.codigolms,
              Alumno: data.u_fullname,
              Sección: seccion.nombre,
              visita: seccion.vista_silabo_curso,
              "Vista rae": seccion.vista_rae.length ? seccion.vista_rae[0] : ""
            });
          });
        }
      });

      const expedienteDigital = XLSX.utils.json_to_sheet(expDigitalData);
      const competencias = XLSX.utils.json_to_sheet(competenciasData);
      const calendario = XLSX.utils.json_to_sheet(calendarioData);
      const planEstudios = XLSX.utils.json_to_sheet(planEstudiosData);
      const vistaNotas = XLSX.utils.json_to_sheet(vistaNotasData);
      const vistaRaes = XLSX.utils.json_to_sheet(vistaRaesData);

      // console.log(competencias);

      // A workbook is the name given to an Excel file
      const wb = XLSX.utils.book_new(); // make Workbook of Excel

      // add Worksheet to Workbook
      // Workbook contains one or more worksheets
      XLSX.utils.book_append_sheet(wb, expedienteDigital, "Exp Digital"); // sheetAName is name of Worksheet
      XLSX.utils.book_append_sheet(wb, competencias, "Competencias");
      XLSX.utils.book_append_sheet(wb, calendario, "Calendario");
      XLSX.utils.book_append_sheet(wb, planEstudios, "Plan de estudios");
      XLSX.utils.book_append_sheet(wb, vistaNotas, "Vista notas");
      XLSX.utils.book_append_sheet(wb, vistaRaes, "Vista rae");

      //href competencias, Calendario y Plan de estudios
      const href = "!ref";
      const splite_href_1 = wb.Sheets.Competencias[href].split(":");
      const splite_href_2 = wb.Sheets["Vista notas"][href].split(":");

      for (let i = 1; i <= splite_href_1[1].substring(1, 5); i++) {
        // Populate competencias
        this.addMoreContentToExcel(
          fechasCompetencias,
          "Competencias",
          i,
          wb.Sheets,
          maxLengthCompetencia
        );

        // Populate Calendario
        this.addMoreContentToExcel(
          fechasCalendario,
          "Calendario",
          i,
          wb.Sheets,
          maxLengthCalendario
        );

        // Populate Plan de estudios
        this.addMoreContentToExcel(
          fechasPlanEstudio,
          "Plan de estudios",
          i,
          wb.Sheets,
          maxLengthPlanEstudio
        );
      }
      for (let i = 1; i <= splite_href_2[1].substring(1, 5); i++) {
        // Populate Vista Nota
        this.addMoreContentToExcel(
          fechasVistaNota,
          "Vista notas",
          i,
          wb.Sheets,
          maxLengthVistaNota
        );

        // Populate Vista Rae
        this.addMoreContentToExcel(
          fechasVistaRaes,
          "Vista rae",
          i,
          wb.Sheets,
          maxLengthVistaRaes
        );
      }
      const last1 = this.excellColumns(
        false,
        "Competencias",
        maxLengthCompetencia - 1
      );

      const last2 = this.excellColumns(
        false,
        "Calendario",
        maxLengthCalendario - 1
      );

      const last3 = this.excellColumns(
        false,
        "Plan de estudios",
        maxLengthPlanEstudio - 1
      );
      const last4 = this.excellColumns(
        false,
        "Vista notas",
        maxLengthVistaNota - 1
      );
      const last5 = this.excellColumns(
        false,
        "Vista rae",
        maxLengthVistaRaes - 1
      );

      const new_href_1 = `A1:${last1}${splite_href_1[1].substring(1, 5)}`;
      const new_href_2 = `A1:${last2}${splite_href_1[1].substring(1, 5)}`;
      const new_href_3 = `A1:${last3}${splite_href_1[1].substring(1, 5)}`;
      const new_href_4 = `A1:${last4}${splite_href_2[1].substring(1, 5)}`;
      const new_href_5 = `A1:${last5}${splite_href_2[1].substring(1, 5)}`;

      wb.Sheets.Competencias[href] = new_href_1;
      wb.Sheets.Calendario[href] = new_href_2;
      wb.Sheets["Plan de estudios"][href] = new_href_3;
      wb.Sheets["Vista notas"][href] = new_href_4;
      wb.Sheets["Vista rae"][href] = new_href_5;

      // export Excel file
      XLSX.writeFile(wb, "IndicadoresPUCP.xlsx"); // name of the file is 'book.xlsx'
    },
    excellColumns(purpose, params, length) {
      const columns = "D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

      if (purpose === "addingContent") {
        if (
          params === "Competencias" ||
          params === "Calendario" ||
          params === "Plan de estudios"
        ) {
          // Starts at D because A,B and C have data; please check the excel :)
          return columns.split(",").slice(0, length);
        }
        // Starts at F because A,B,C,D and E have data; please check the excel :)
        return columns.split(",").slice(2, length);
      } else {
        if (
          params === "Competencias" ||
          params === "Calendario" ||
          params === "Plan de estudios"
        ) {
          const arrcCompCalendPlan = columns.split(",").slice(0, length);
          return arrcCompCalendPlan.length
            ? arrcCompCalendPlan[arrcCompCalendPlan.length - 1]
            : "D";
        }
        const arrNotaRae = columns.split(",").slice(2, length);
        return arrNotaRae.length ? arrNotaRae[arrNotaRae.length - 1] : "F";
      }
    },
    addMoreContentToExcel(array, property, index, sheet, length) {
      const results = this.excellColumns("addingContent", property, length - 1);
      if (index === 1) {
        for (let key in results) {
          sheet[property][`${results[key]}${index}`] = {
            t: "s",
            v: ``
          };
        }
      }
      if (index < array.length + 1) {
        for (let key in results) {
          const date = array[index - 1][parseInt(key) + 1]
            ? array[index - 1][parseInt(key) + 1]
            : "";
          sheet[property][`${results[key]}${index + 1}`] = {
            t: "s",
            v: `${date}`
          };
        }
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss"></style>
