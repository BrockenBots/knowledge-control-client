import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import WaterMark from '../../elements/WaterMark'
import { currentTest } from '../../api/getTests'
import { useParams, useNavigate } from 'react-router-dom'
import { isLogged } from '../../api/Login'
import { sendTest } from '../../api/sendTest'
import { useForm } from 'react-hook-form'
import './style.css'

const TestScreen = () => {

    const [test, setTest] = useState(0)
    const navigate = useNavigate()
    let { test_id } = useParams()
    useEffect( () => {
     currentTest(test_id).then(data => setTest(data))
    },[])

    const { register, handleSubmit } = useForm()

    const sendData = (data) => {

        const questionsData = (data) => {
            const questions = []
            for (let i in data) {
                const answer_id = Number(data[i].split('_')[0])
                const testAnswerData = test.questions[Number(i)-1].answers[Number(data[i].split('_')[0]) - 1]
                const answer = {
                    "id": Number(i),
                    "score": test.questions[Number(i)-1].score,
                    "answer": {
                        "id": answer_id, //[Number(data[i].split('_')[0])]
                        "answer_text": data[i].split('_')[2],
                        "question_id": Number(i),
                        "is_correct": ('true' === data[i].split('_')[1]),
                    }
                }
                questions.push(answer)
            }
            return questions
        }
        
        const serializedData = {
            "test": Number(test_id),
            "user": JSON.parse(localStorage.getItem('user')).data.user_data.id,
            "questions": questionsData(data)
        }


        sendTest(serializedData)
        navigate('/')
        // console.log(serializedData)
        // alert(JSON.stringify(serializedData))
    }

  return (
    <div className={`Test ${isLogged() ? 'withFooter' : 'withoutFooter'}`}>
        <WaterMark />
            <h2 style={{ width: '50%', margin: 'auto', maxWidth: '1000px'}}>{test.test_name}</h2>
            <h3 style={{color: '#838282', width: '50%', margin: 'auto', maxWidth: '1000px'}}>{test.description}</h3>
            <div className='qustionsDiv'>
            <div className='qustionsDivInner'>
                <form onSubmit={handleSubmit(sendData)}>
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
                                                <input {...register(`${question.id}`)} type='radio' name={question.id} value={`${answer.id}_${answer.is_correct}_${answer.answer_text}`} />
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
                <button style={{color: '#FFF',
            background: '#45DEFF',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            border: 'none',
            borderRadius: '10px',
            width: '140px',
            height: '50px',
            fontSize: '24px',
            margin: '25px 0'}} type='submit'>Send Test</button>
                </form>
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default TestScreen