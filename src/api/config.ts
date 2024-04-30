interface IConfig {
    apiUrl?: string
}

export const config: IConfig = {
    apiUrl: import.meta.env.VITE_API_URL,
}