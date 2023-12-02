export interface UserInterface {
    id?: number
    username: string
    email: string
    first_name?: string
    last_name?: string
    bio?: string
    role?: string
}

export interface LoginDataInterface {
    username: string
    confirmation_code: string
}

export interface TokenInterface {
    token: string
}
