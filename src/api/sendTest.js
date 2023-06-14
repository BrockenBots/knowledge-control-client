import axios from "axios";


export const sendTest = async (testData) => {
    
    const tests = axios.post('http://127.0.0.1:8000/api/v1/test/test_cat/id/result/', testData )
    .then((data) => {
      console.log(data)
      alert('You passed test')
    })
    .catch(err => {
      console.log(err)
      alert('Something went wrong')
    })

    return tests
}