import { Paper, styled } from '@mui/material'

const StyledPaper = styled(Paper)({
    borderRadius: 10,
})

export const OuterPaper = styled(StyledPaper)({
    padding: 40,
    width: 600,
})

export const InnerPaper = styled(StyledPaper)({
    padding: 16,
    marginTop: 20,
    cursor: 'pointer',
})