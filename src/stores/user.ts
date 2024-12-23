import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    userInfo: null
  }),
  actions: {
    async login(loginForm: { username: string; password: string }) {
      // Implement login logic here
      console.log('Login form:', loginForm);
      // Example: Fetch token and user info from API
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(loginForm)
      // });
      // const data = await response.json();
      // this.token = data.token;
      // this.userInfo = data.userInfo;
    }
  }
});