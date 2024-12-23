<template>
  <div class="system-settings">
    <el-card>
      <template #header>
        <h3>系统设置</h3>
      </template>
      
      <el-form
        ref="settingsFormRef"
        :model="settingsForm"
        :rules="settingsRules"
        label-width="120px"
      >
        <el-form-item label="系统名称" prop="systemName">
          <el-input v-model="settingsForm.systemName" />
        </el-form-item>
        
        <el-form-item label="OpenTCS服务器" prop="serverUrl">
          <el-input v-model="settingsForm.serverUrl" />
        </el-form-item>
        
        <el-form-item label="WebSocket地址" prop="websocketUrl">
          <el-input v-model="settingsForm.websocketUrl" />
        </el-form-item>
        
        <el-form-item label="数据刷新间隔" prop="refreshInterval">
          <el-input-number 
            v-model="settingsForm.refreshInterval"
            :min="1000"
            :step="1000"
          />
          <span class="ml-2">毫秒</span>
        </el-form-item>
        
        <el-form-item label="日志级别" prop="logLevel">
          <el-select v-model="settingsForm.logLevel">
            <el-option label="DEBUG" value="debug" />
            <el-option label="INFO" value="info" />
            <el-option label="WARN" value="warn" />
            <el-option label="ERROR" value="error" />
          </el-select>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="saving">
            保存设置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'

const settingsFormRef = ref<FormInstance>()
const saving = ref(false)

const settingsForm = reactive({
  systemName: '',
  serverUrl: '',
  websocketUrl: '',
  refreshInterval: 5000,
  logLevel: 'info'
})

const settingsRules = {
  systemName: [{ required: true, message: '请输入系统名称', trigger: 'blur' }],
  serverUrl: [{ required: true, message: '请输入服务器地址', trigger: 'blur' }],
  websocketUrl: [{ required: true, message: '请输入WebSocket地址', trigger: 'blur' }],
  refreshInterval: [{ required: true, message: '请输入刷新间隔', trigger: 'blur' }],
  logLevel: [{ required: true, message: '请选择日志级别', trigger: 'change' }]
}

const loadSettings = async () => {
  try {
    // const data = await getSystemSettings()
    // Object.assign(settingsForm, data)
  } catch (error) {
    console.error(error)
  }
}

const handleSave = async () => {
  if (!settingsFormRef.value) return
  
  await settingsFormRef.value.validate(async (valid) => {
    if (valid) {
      saving.value = true
      try {
        // await updateSystemSettings(settingsForm)
        ElMessage.success('保存成功')
      } catch (error) {
        console.error(error)
      } finally {
        saving.value = false
      }
    }
  })
}

onMounted(() => {
  loadSettings()
})
</script> 