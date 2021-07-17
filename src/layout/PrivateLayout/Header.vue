<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="isCollapse ? 'menu-unfold' : 'menu-fold'"
      @click="handleCollapse"
    />
  </a-layout-header>
</template>

<script>
import { mapGetters } from 'vuex'
import { COLLAPSE_SIDEBAR } from '../../store/actions.type'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isCollapse'])
  },
  methods: {
    handleCollapse () {
      this.$store.dispatch(COLLAPSE_SIDEBAR)
    }
  }
}
</script>
