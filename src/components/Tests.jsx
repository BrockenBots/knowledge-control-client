import React, { useEffect, useState } from 'react'
import { getTests } from '../api/getTests'

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
            maxWidth: '500px',
            margin: '20px auto',
            padding: '15px',
            textAlign: 'left',
            background: '#FFFFFF',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            height: '150px'
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

        }
      }


    const [tests, setTests] = useState([])

    useEffect(() => {
        getTests().then((data) => setTests(data))
    },[])

    

    
  return (
    <div style={styles.testBlock}>
        {tests.map((test) => {
            return (
                <div style={styles.testBlockElement} key={test.id}>
                    <h2>{test.test_name}</h2>
                    <h3 style={{color: '#838282'}}>{test.description}</h3>
                    <button style={styles.invertbtn}>Начать</button>
                </div>
            )
        })}
    </div>
  )
}

export default Tests