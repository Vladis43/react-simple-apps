import { Button as MuiButton, styled, Typography as MuiTypography } from '@mui/material'

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Image = styled('img')({
    width: 150,
})

export const Typography = styled(MuiTypography)({
    marginTop: 20
})

export const Button = styled(MuiButton)({
    marginTop: 20
})