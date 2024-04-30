import { FC } from 'react'
import { Typography } from './styles.ts'
import { QuestionProps, questions } from '@/mocks'
import { Box, ProgressBar } from '@/components'

interface GameProps {
    step: number
    question: QuestionProps
    handleClickVariant: (index: number) => void
}

export const Game: FC<GameProps> = ({ step, question, handleClickVariant }) => {
    const percentage: number = Math.round(step / questions.length * 100)

    return (
        <>
            <ProgressBar value={percentage}/>
            <Typography variant="h4">{question.title}</Typography>
            {question.variants.map((variant: string, index: number) => (
                <Box key={variant} boxType="inner" onClick={() => handleClickVariant(index)}>{variant}</Box>
            ))}
        </>
    )
}