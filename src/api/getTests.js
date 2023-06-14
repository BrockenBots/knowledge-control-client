import axios from 'axios'

export const getTests = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    if (user !== null) {
      // alert(user)
      const tests = axios.get('http://127.0.0.1:8000/api/v1/test/test_cat/', { params: { user_id: user.data.user_data.id } })
      .then((data) => {
        return data.data.tests
      })

      return tests
    }
    

    
}

export const currentTest = async (test_id) => {
    const tests = axios.get('http://127.0.0.1:8000/api/v1/test/test_cat/id/', { params: { test_id: `${test_id}` } })
    .then((data) => {
      return data.data
    })

    // fetch
    return tests
}