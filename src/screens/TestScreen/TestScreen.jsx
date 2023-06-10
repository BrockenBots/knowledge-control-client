import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import WaterMark from '../../elements/WaterMark'
import { currentTest } from '../../api/getTests'
import { useParams, useNavigate } from 'react-router-dom'
import { isLogged } from '../../api/Login'
import './style.css'

const TestScreen = () => {

    const [test, setTest] = useState(0)
    let { test_id } = useParams()
    useEffect( () => {
     currentTest(test_id).then(data => setTest(data))
    },[])

  return (
    <div className={`Test ${isLogged ? 'withFooter' : 'withoutFooter'}`}>
        <WaterMark />
            <h2 style={{ width: '50%', margin: 'auto', maxWidth: '1000px'}}>{test.test_name}</h2>
            <h3 style={{color: '#838282', width: '50%', margin: 'auto', maxWidth: '1000px'}}>{test.description}</h3>
            <div className='qustionsDiv'>
            <div className='qustionsDivInner'>
                {test !== 0 ? test.questions.map((question) => {
                    return (
                        <div key={question.id} className='questionDiv'>
                        <div className='questionDivInner'>
                            <h2 className='questionDiv-element'>{question.question_text}</h2>
                            <div className='questionDiv-radio questionDiv-element'>
                                {question.answers.map((answer) => {
                                    return (
                                        <div class="form-control" >
                                            <label>
                                                <input type='radio' name={answer.question_id} value={answer.answer_text} />
                                                {answer.answer_text}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        </div>
                    )
                }) : ''}
                
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default TestScreen