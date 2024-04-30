import { styled, Avatar as MuiAvatar, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
})

export const Avatar = styled(MuiAvatar)({})

export const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 20,
})

export const Name = styled(Typography)({
    color: blue[500],
})

export const Email = styled(Typography)({
    color: grey[500],
})