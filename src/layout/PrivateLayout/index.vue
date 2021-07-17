<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <AppSidebar />
    <a-layout>
      <AppHeader></AppHeader>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <transition name="fade">
          <router-view />
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AppHeader from './Header'
import AppSidebar from './Sidebar'

export default {
  name: 'PrivateLayout',
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #02a065;
}

.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background: #02a065;
}
</style>
