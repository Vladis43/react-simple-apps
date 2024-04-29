import { FC, useState } from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonWrapper = styled.div`
    button:nth-child(2) {
        margin-left: 20px;
    }
`

export const App: FC = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <Container>
            <Typography variant="h2">Count</Typography>
            <Typography variant="h1">{count}</Typography>
            <ButtonWrapper>
                <Button variant="contained" color="success" onClick={increment}>Plus</Button>
                <Button variant="contained" color="error" onClick={decrement}>Minus</Button>
            </ButtonWrapper>
        </Container>
    )
}