<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="@/assets/robot.png" alt="AGV Logo" />
        <h1 v-show="!collapsed">AGV调度系统</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="dashboard">
          <DashboardOutlined />
          <span>工作台</span>
        </a-menu-item>
        <a-menu-item key="map">
          <router-link to="/map">
            <EditOutlined />
            <span>地图编辑器</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="devices">
          <router-link to="/devices">
            <RobotOutlined />
            <span>设备管理</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="operations">
          <router-link to="/operations">
            <ControlOutlined />
            <span>运营管理</span>
          </router-link>
        </a-menu-item>
        
        <a-sub-menu key="system">
          <template #title>
            <SettingOutlined />
            <span>系统管理</span>
          </template>
          <a-menu-item key="users">用户管理</a-menu-item>
          <a-menu-item key="settings">系统设置</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <MenuFoldOutlined
          v-if="!collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuUnfoldOutlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  DashboardOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['dashboard'])
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 48px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #001529;
  overflow: hidden;
}

.logo img {
  height: 32px;
  width: 32px;
  object-fit: contain;
}

.logo h1 {
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  opacity: 0.85;
}

.ant-layout-sider {
  background: #001529;
}
</style> 