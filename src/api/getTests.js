import axios from 'axios'

export const getTests = async () => {

    const tests = axios.get('http://127.0.0.1:8000/api/v1/test/test_cat/', { params: { user_id: '1' } })
    .then((data) => {
      return data.data.tests
    })

    // fetch
    return tests
}

export const currentTest = async (test_id) => {
    const tests = axios.get('http://127.0.0.1:8000/api/v1/test/test_cat/id/', { params: { test_id: `${test_id}` } })
    .then((data) => {
      return data.data
    })

    // fetch
    return tests
}