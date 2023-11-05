export interface IGame {
    background_image: string;
    name: string;
    id: string;
    rating: number,
    slug: string,
    genres: [],
    description_raw?: string,
    platforms?: any,
    released?: string,
    website?: string,
    added?: string,
    developers?: [],
    publishers?: [],
    updated?: [],
    esrb_rating?: {name: string},
}

export interface IInput {
    label?: string,
    placeholder?: string,
    type: 'search' | 'text' | 'textarea' | 'password' | 'email' | 'file',
    value?: string,
    onChange: (value: string) => void,
}

export interface IFilter {
    platformID: string,
    genreID: string,
    name: string,
    releaseFrom: string,
    releaseTo: string,
    updateFrom: string,
    updateTo: string,
    sorting: string  
}

export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
    node: any;
    close: any;
};