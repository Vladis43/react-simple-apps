import { FC, ChangeEvent } from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import { InputContainer, Input, UserCardContainer } from './styles.ts'
import { IUser } from '@/types'
import { UserCard, UsersSkeleton, Button } from '@/components'

interface Props {
    users: IUser[]
    invites: string[]
    isLoading: boolean
    searchValue: string
    onChangeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void
    onClickInvite: (id: string) => void
    onClickSuccess: () => void
}

export const Users: FC<Props> = ({
    users, invites, isLoading, searchValue,
    onChangeSearchValue, onClickInvite, onClickSuccess,
}) => (
    <>
        <InputContainer>
            <SearchIcon color="action"/>
            <Input placeholder="Найти пользователя..." value={searchValue} onChange={onChangeSearchValue}/>
        </InputContainer>
        <UserCardContainer>
            {isLoading ? <UsersSkeleton count={5}/> : (
                users.filter((user: IUser) =>
                    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchValue.toLowerCase())
                    || user.email.toLowerCase().includes(searchValue.toLowerCase())
                ).map((user: IUser) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        isInvited={invites.includes(user.id)}
                        onClickInvite={onClickInvite}
                    />)
                )
            )}
        </UserCardContainer>
        {!!invites.length
            && <Button onClick={onClickSuccess}>Отправить приглашение</Button>
        }
    </>
)