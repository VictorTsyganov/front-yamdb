export interface ProductionInterface {
    id?: number
    rating: number
    genre: [
        {
            name: string
            slug: string
        }
    ]
    category: {
        name: string
        slug: string
    }
    name: string
    year: number
    description?: string
    reviews?: any
    disable_add_review?: boolean
}

export interface PageEvent {
    first: number
    rows: number
    page: number
    pageCount: number
}

export interface ReviewInterface {
    id?: number
    title?: string
    author?: string
    text: string
    score: number
    pub_date?: string
}
