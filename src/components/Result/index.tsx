import { FC } from 'react'
import { Container, Image, Typography, Button } from './styles.ts'
import images from '@/assets/images'
import { questions } from '@/mocks'

interface ResultProps {
    correct: number
}

export const Result: FC<ResultProps> = ({ correct }) => {
    const pageReload = () => window.location.reload()

    return (
        <Container>
            <Image src={images.confetti} alt="confetti.png"/>
            <Typography variant="h4">Ви відгадали {correct} з {questions.length} відповідей</Typography>
            <Button variant="contained" color="error" onClick={pageReload}>Спробувати знову</Button>
        </Container>
    )
}
