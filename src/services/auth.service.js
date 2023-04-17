import axios from 'axios';

const API_URL = 'http://localhost:5173/'; // change this to your API URL

class AuthService {
  login() {
    return axios.get(`${API_URL}/auth/steam`);
  }

  logout() {
    return axios.get(`${API_URL}/logout`);
  }

  getUser() {
    return axios.get(`${API_URL}/account`);
  }
}

export default new AuthService();