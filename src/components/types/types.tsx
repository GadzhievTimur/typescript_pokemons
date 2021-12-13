export interface IPokeUrl {
    name: string,
    url: string,
}

export interface IPokeFetch {
    results: IPokeUrl[]
}

export interface IPokeFetchCard {
    id: number,
    name: string,
    sprite: string,
    types: IPokeTypesRaw[],
}

export interface IPokeTypesRaw {
    slot: number,
    type: IPokeTypesTrue
}

export interface IPokeTypesTrue {
    name: string,
    url: string,
}