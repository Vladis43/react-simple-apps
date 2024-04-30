import { FC } from 'react'
import { IconButton } from '@mui/material'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import { Avatar, Container, ContentContainer, Name, Email } from './styles.ts'
import { IUser } from '@/types'

interface Props {
    user: IUser
    isInvited: boolean
    onClickInvite: (id: string) => void
}

export const UserCard: FC<Props> = ({ user, isInvited, onClickInvite }) => {
    const name: string = `${user.first_name} ${user.last_name}`

    return (
        <Container>
            <Avatar src={user.avatar}/>
            <ContentContainer>
                <Name variant="h6">{name}</Name>
                <Email>{user.email}</Email>
            </ContentContainer>
            <IconButton size="large" onClick={() => onClickInvite(user.id)}>
                {isInvited ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>
        </Container>
    )
}