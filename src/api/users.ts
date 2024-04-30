import { get } from './api.ts'
import { IUser } from '@/types'

interface IUserResponse {
    page: number
    per_page: number
    total: number
    total_pages: number
    support: {
        url: string
        text: string
    }
    data: IUser[]
}

interface IUserService {
    getUsers: () => Promise<IUserResponse>
}

export const userService: IUserService = {
    async getUsers(): Promise<IUserResponse> {
        return await get('/users')
    }
}