<template>
  <div class="lw-absolute">
    <label
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <img :src="`/flag_${$i18n.locale}.svg`" alt="flag" style="margin-right:5px;">
      <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
    </label>
    <div v-if="isVisible" ref="dropdown" class="style-dropdown">
      <div>
        <a
          href="#"
          @click.prevent="setLocale('en')"
          ref="account"
          @keydown.up.exact.prevent=""
          @keydown.tab.exact="focusNext(false)"
          @keydown.down.exact.prevent="focusNext(true)"
          @keydown.esc.exact="hideDropdown"
        >
          <img src="/flag_en.svg" alt="english flag" class="h-8 w-8">
          <span class="ml-2">{{ $t('english') }}</span>
        </a>
      </div>
      <div>
        <a
          href="#"
          @click.prevent="setLocale('es')"
          @keydown.shift.tab="focusPrevious(false)"
          @keydown.up.exact.prevent="focusPrevious(true)"
          @keydown.down.exact.prevent=""
          @keydown.tab.exact="hideDropdown"
          @keydown.esc.exact="hideDropdown"
        >
          <img src="/flag_es.svg" alt="spanish flag" class="h-8 w-8">
          <span class="ml-2">{{ $t('spanish') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }

  }
}
</script>
<style lang="scss">
.lw-absolute{
    position: absolute;
    right: 60px;
}
.style-dropdown{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a{
    img{
      margin-right: 10px;
    }
  }  
}
</style>
