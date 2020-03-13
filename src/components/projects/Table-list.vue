<template lang="html">
  <div class="main-container-table">
    <div class="container-view">
      <div class="table__grid">
        <div class="table__grid__head">
          <div>Código</div>
          <div>A. paterno</div>
          <div>A. materno</div>
          <div>Nombres</div>
          <div>Correo</div>
          <div>Icono</div>
          <div></div>
        </div>
        <div class="table__grid__container">
          <div
            class="table__grid__body"
            v-for="(item, i) in dataTable"
            :key="i"
          >
            <div
              class="grid_heads_responsive text__responsive"
              text-responsive="Código"
            >
              <span> {{ item.codigo }} </span>
            </div>
            <div
              class="grid_heads_responsive text__responsive"
              text-responsive="A. paterno"
            >
              <span>{{ item.apellido_paterno }}</span>
            </div>
            <div
              class="grid_heads_responsive text__responsive"
              text-responsive="A. materno"
            >
              <span>{{ item.apellido_materno }}</span>
            </div>
            <div class="text__responsive" text-responsive="Nombres">
              <span>{{ item.nombres }}</span>
            </div>
            <div class="active text__responsive" text-responsive="Correo">
              <span> {{ item.correo }} </span>
            </div>
            <div class=" text__responsive" text-responsive="Icono">
              <span>
                <el-checkbox v-model="checked">Opción</el-checkbox>
              </span>
            </div>
            <div class=" text__responsive" text-responsive="--">
              <span>
                <i class="el-icon-more"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableList",
  data() {
    return {
      checked: true,
      dataTable: [
        {
          codigo: "5e5c4a6e",
          apellido_paterno: "Benavides",
          apellido_materno: "Cabrera",
          nombres: "Cabrera",
          correo: "alexben9602@gmail.com"
        },
        {
          codigo: "5e5c4a6e",
          apellido_paterno: "Benavides",
          apellido_materno: "Cabrera",
          nombres: "Cabrera",
          correo: "alexben9602@gmail.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.main-container-table {
  .el-checkbox__label {
    display: none;
  }
  .el-icon-more {
    transform: rotate(90deg);
    cursor: pointer;
  }
  @mixin content-style {
    background-color: #b4b0d1;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 0;
    margin: 1rem 0;
  }
  @mixin flex-column {
    display: flex;
    flex-direction: column;
  }
  @mixin flex-center {
    display: flex;
    justify-content: center;
  }
  .table__grid {
    &__head,
    &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr) 1.5fr 1fr 0.5fr;
      padding: 15px;
      text-align: center;
    }
    &__head {
      background-color: #6a5acd;
      color: #ffffff;
      border-radius: 10px 10px 0 0;
      display: none;
      @media screen and(min-width: 768px) {
        display: grid;
      }
    }
    &__body {
      border-bottom: 1px solid #f0f0f0;
      border-left: 1px solid #f0f0f0;
      border-right: 1px solid #f0f0f0;
      @media screen and(max-width: 767px) {
        margin-bottom: 1rem;
        border-top: 1px solid #f0f0f0;
      }

      // display: block;
      @media screen and(min-width: 768px) {
        &:last-of-type {
          border-radius: 0 0 10px 10px;
        }
        display: grid;
        align-items: center;
        &:nth-child(2n) {
          background-color: #dddddd;
        }
      }
    }

    // Table responsive
    @media screen and(max-width: 767px) {
      &__container {
        .table__grid__body {
          position: relative;
          grid-template-columns: repeat(3, 1fr);
          padding: 0;
          border-radius: 0 0 10px 10px;
          border-top: 0;
          .text__responsive {
            &::before {
              content: attr(text-responsive);
              @include content-style;
            }
            &:nth-last-of-type(1) {
              position: absolute;
              right: 0.1rem;
              color: #ffffff;
              &::before {
                content: "";
                padding: 0;
              }
            }
          }

          .grid_heads_responsive {
            &::before {
              color: #ffffff;
              background-color: #6a5acd;
              padding: 1rem 0;
              @include flex-center;
              align-items: center;
              // border-radius: 10px 10px 0 0;
            }
          }
        }
      }
    }
  }
}
</style>
