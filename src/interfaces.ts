export interface IGame {
    background_image: string;
    name: string;
    id: string;
    rating: number,
    slug: string,
    genres: [],
    description_raw?: string,
    platforms?: any,
    released?: string
    website?: string
    // value?: string,
}

export interface IInput {
    label?: string,
    placeholder?: string,
    type: 'search' | 'text' | 'textarea' | 'password' | 'email',
    value: string,
    onChange: (value: string) => void,
}