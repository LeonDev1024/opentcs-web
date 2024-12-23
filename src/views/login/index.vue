<template>
  <div class="login-container">
    <a-card class="login-card" :bordered="false">
      <h2 class="login-title">OpenTCS 管理系统</h2>
      <a-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        @finish="handleLogin"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="loginForm.username"
            size="large"
            placeholder="用户名"
          >
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="loginForm.password"
            size="large"
            placeholder="密码"
          >
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            size="large"
            :loading="loading"
            block
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: '',
  password: ''
})
const loginRules = reactive<Record<string, Rule[]>>({
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }]
})

const handleLogin = async () => {
  loading.value = true
  try {
    await userStore.login(loginForm)
    message.success('登录成功')
    router.push('/dashboard')
  } catch (error: any) {
    message.error(error.message || '登录失败')
  } finally {
    loading.value = false
  }
}

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
}

.login-card {
  width: 368px;
  border-radius: 8px;
}

.login-title {
  text-align: center;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.85);
}
</style>