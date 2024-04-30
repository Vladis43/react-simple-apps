import { styled } from '@mui/material/styles'
import { LinearProgress } from '@mui/material'

export const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    background: 'rgba(0, 0, 0, 0.05)',
    '& .MuiLinearProgress-bar': {
        background: 'linear-gradient(to right, #7eff78, #78eaff)',
        backgroundClip: 'content-box',
    },
}))