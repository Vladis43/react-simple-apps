import { FC } from 'react'
import { PaperProps } from '@mui/material'
import { InnerPaper, OuterPaper } from './styles.ts'

interface Props extends PaperProps {
    boxType?: 'inner' | 'outer'
}

export const Box: FC<Props> = ({ boxType, onClick, children }) => {
    const BoxElement = boxType === 'inner' ? InnerPaper : OuterPaper

    return <BoxElement onClick={onClick}>{children}</BoxElement>
}