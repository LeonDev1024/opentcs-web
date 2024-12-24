<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="@/assets/robot.png" alt="AGV Logo" />
        <h1 v-show="!collapsed">AGV调度系统</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="dashboard">
          <router-link to="/dashboard">
            <DashboardOutlined />
            <span>工作台</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="map">
          <router-link to="/map">
            <EnvironmentOutlined />
            <span>地图管理</span>
          </router-link>
        </a-menu-item>

        <a-sub-menu key="devices">
          <template #title>
            <AppstoreOutlined />
            <span>设备管理</span>
          </template>
          <a-menu-item key="robots">
            <RobotOutlined />
            <router-link to="/devices/robots">配送机器人</router-link>
          </a-menu-item>
        </a-sub-menu>

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
      <a-layout-header style="background: #fff; padding: 0; display: flex; justify-content: space-between; align-items: center;">
        <div class="trigger-container">
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
        </div>
        <div class="user-info">
          <img src="@/assets/user-avatar.png" alt="User Avatar" class="avatar" />
          <span class="username">{{ username }}</span>
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/profile">个人信息</router-link>
                </a-menu-item>
                <a-menu-item>
                  <a @click="handleLogout">退出登录</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
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
  EnvironmentOutlined,
  AppstoreOutlined,
  RobotOutlined,
  ControlOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined
} from '@ant-design/icons-vue'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['dashboard'])
const username = ref('Jason') 

const handleLogout = () => {
  // Implement logout logic here
  console.log('User logged out')
}
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

.user-info {
  display: flex;
  align-items: center;
  margin-right: 24px;
}

.avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  margin-right: 8px;
}

.trigger-container {
  padding-left: 24px;
}
</style>