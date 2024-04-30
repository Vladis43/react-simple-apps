import { FC } from 'react'
import { LinearProgressProps } from '@mui/material'
import { BorderLinearProgress } from './styles.ts'

interface ProgressBarProps extends LinearProgressProps {
    value: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ value, variant = 'determinate' }) =>
    <BorderLinearProgress variant={variant} value={value}/>