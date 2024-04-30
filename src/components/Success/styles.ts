import { styled } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { green } from '@mui/material/colors'

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%'
})

export const SuccessIcon = styled(CheckCircle)({
    fontSize: 150,
    color: green[500],
})