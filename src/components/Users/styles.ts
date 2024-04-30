import { InputBase, Paper, styled } from '@mui/material'

export const InputContainer = styled(Paper)({
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
})

export const Input = styled(InputBase)({
    marginLeft: 15,
    flex: 1,
})

export const UserCardContainer = styled('div')({
    margin: '20px 0 20px 0',
    flex: 1,
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    '& > :not(:first-of-type)': {
        marginTop: 20,
    }
})