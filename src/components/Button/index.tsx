import { FC } from 'react'
import { Button as MuiButton, styled, ButtonProps } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export const StyledButton = styled(MuiButton)({
    width: '100%',
    borderRadius: '10px',
    backgroundColor: deepOrange[500],
    '&:hover': {
        backgroundColor: deepOrange[500],
    }
})

export const Button: FC<ButtonProps> = ({ children, ...props }) =>
    <StyledButton {...props} variant="contained">{children}</StyledButton>