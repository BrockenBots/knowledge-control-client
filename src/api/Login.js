import axios from "axios"

export const isLogged = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user !== '') {
      return true
    }
    else {
      return false
    }
  }


export const Login = (username, password) => {
  axios.get(
    'http://127.0.0.1:8000/api/v1/user/auth', 
  { 
    params: { 
      username: username, password: password 
    }
  }
  )
  .then(userData => {
    localStorage.setItem('user', JSON.stringify(userData))
    return JSON.stringify(userData)
  })
  .catch(err => alert(err.message))
}