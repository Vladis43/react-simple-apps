import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Paper, styled } from '@mui/material'
import { IUser } from '@/types'
import { userService } from '@/api'
import { Users, Success } from '@/components'

const Container = styled('div')({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
export const BoxContainer = styled(Paper)({
    width: 400,
    padding: '40px',
    borderRadius: '20px',
    height: 520,
    display: 'flex',
    flexDirection: 'column',
})

export const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [invites, setInvites] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [searchValue, setSearchValue] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getUsers()
                setUsers(response.data)
            } catch (error) {
                console.log(error)
                setErrorMessage('Failed to fetch users')
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id: string) => {
        if (!invites.includes(id)) {
            setInvites((prev) => [...prev, id])
        } else {
            setInvites((prev) => prev.filter(_id => _id !== id))
        }
    }

    const onClickSuccess = () => setSuccess(true)

    if (errorMessage) return <div>Error: {errorMessage}</div>

    return (
        <Container>
            <BoxContainer>
                {success ? <Success count={invites.length}/> : (
                    <Users
                        users={users}
                        invites={invites}
                        isLoading={loading}
                        searchValue={searchValue}
                        onChangeSearchValue={onChangeSearchValue}
                        onClickInvite={onClickInvite}
                        onClickSuccess={onClickSuccess}
                    />
                )}
            </BoxContainer>
        </Container>
    )
}