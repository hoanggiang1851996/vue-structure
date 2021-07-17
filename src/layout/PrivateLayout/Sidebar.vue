<template>
  <a-layout-sider :class="!isCollapse && 'collapsed'" v-model="isCollapse" :trigger="null" collapsible>
    <div class="text-center logo">
      <img src="../../assets/logo.png" alt="logo" />
      <span class="header-sidebar" v-if="isCollapse = !isCollapse">Giaohangtietkiem.vn</span>
    </div>
    <a-menu theme="dark" mode="inline">
      <a-sub-menu v-if="item.children" v-for="item in menu" :key="item.name">
        <span slot="title"><a-icon type="user" /><span v-if="isCollapse = !isCollapse">Khách hàng</span></span>

        <a-menu-item v-for="child in item.children" :key="child.name" @click="clickItem(child.path)">
          {{ child.name }}
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item v-else :key="item.name" @click="clickItem(item.path)">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex'
import menu from '../../_nav'

export default {
  name: 'AppSidebar',
  data () {
    return {
      menu
    }
  },
  computed: {
    ...mapGetters({
      nameFromStore: 'isCollapse'
    }),
    isCollapse: {
      get () {
        return this.nameFromStore
      },
      set (isCollapse) {
        return isCollapse
      }
    }
  },
  methods: {
    clickItem (path) {
      if (this.$route.path === path) return

      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>
.logo {
  padding: 10px 10px 10px 24px;
  background: #02a065;
  display: flex;
  align-items: center;
}

.logo img {
  margin-right: 10px;
  width: 36px;
}

.collapsed {
  flex: 0 0 250px !important;
  max-width: 250px !important;
  min-width: 250px !important;
  width: 250px !important;
}

.header-sidebar {
  font-weight: bold;
  color: #000;
  font-size: 16px;
  animation: fadein 1s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein { /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein { /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
