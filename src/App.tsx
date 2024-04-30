import { FC, useState } from 'react'
import styled from 'styled-components'
import { QuestionProps, questions } from '@/mocks'
import { Game, Result, Box } from '@/components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const App: FC = () => {
    const [step, setStep] = useState<number>(0)
    const [correct, setCorrect] = useState<number>(0)
    const question: QuestionProps = questions[step]

    const handleClickVariant = (index: number) => {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
        console.log('step', step, 'index', index, 'correct', correct)
    }

    return (
        <Container>
            <Box boxType="outer">
                {step !== questions.length ? (
                    <Game step={step} question={question} handleClickVariant={handleClickVariant}/>
                ) : (
                    <Result correct={correct}/>
                )}
            </Box>
        </Container>
    )
}