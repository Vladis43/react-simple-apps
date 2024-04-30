import { FC } from 'react'
import { Typography } from '@mui/material'
import { Container, SuccessIcon } from './styles.ts'
import { Button } from '@/components'

interface Props {
    count: number
}

export const Success: FC<Props> = ({ count }) => (
    <Container>
        <div>
            <SuccessIcon/>
            <Typography variant="h3">Успешно!</Typography>
        </div>
        <Typography variant="h5">Всем {count} пользователям отправлено приглашение.</Typography>
        <Button onClick={() => window.location.reload()}>Назад</Button>
    </Container>
)