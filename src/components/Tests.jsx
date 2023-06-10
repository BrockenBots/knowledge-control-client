import React, { useEffect, useState } from 'react'
import { getTests } from '../api/getTests'
import { useNavigate } from 'react-router-dom';

const Tests = () => {

    const styles = {
        testBlock : {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: 'auto'
        },
        testBlockElement: {
            width: '100%',
            height: '150px',
            maxWidth: '500px',
            margin: '20px auto',
            padding: '15px',
            textAlign: 'left',
            background: '#FFFFFF',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        invertbtn: {
            color: '#FFF',
            background: '#45DEFF',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            border: 'none',
            borderRadius: '10px',
            width: '140px',
            height: '50px',
            fontSize: '24px',
            marginRight: '0',
            marginLeft: 'auto',
        }
      }

    const navigate = useNavigate()
    const [tests, setTests] = useState([])

    const startTest = (test_id) => {
        navigate(`/test/${test_id}`)
    }

    useEffect(() => {
        getTests().then((data) => setTests(data))
    },[])

    

    
  return (
    <div style={styles.testBlock}>
        {tests.map((test) => {
            return (
                <div style={styles.testBlockElement} key={test.id}>
                    <div>
                        <h2>{test.test_name}</h2>
                        <h3 style={{color: '#838282'}}>{test.description}</h3>
                    </div>
                    
                    <button style={styles.invertbtn} onClick={() => startTest(test.id)}>Начать</button>
                </div>
            )
        })}
    </div>
  )
}

export default Tests