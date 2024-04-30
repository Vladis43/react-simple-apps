import { FC } from 'react'
import { Skeleton, styled } from '@mui/material'

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
})
const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 15,
})

interface Props {
    count?: number
}

const SkeletonLayout: FC = () => (
    <Container>
        <Skeleton variant="circular" width={40} height={40}/>
        <TextContainer>
            <Skeleton variant="text" height={40}/>
            <Skeleton variant="text" height={20}/>
        </TextContainer>
    </Container>
)

export const UsersSkeleton: FC<Props> = ({ count = 1 }) =>
    [...Array(count)].map((_, i) => <SkeletonLayout key={i}/>)