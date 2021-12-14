import { Grid } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { Poke } from './PokeItem'
import { IPokeUrl } from '../types/types'


interface PokeListProps {
    pokes?: IPokeUrl[],
    searchByName: string
    searchByType: string[],
}
export const PokeList: FC<PokeListProps> = ({ pokes, searchByName, searchByType }) => {
    const [pokeArr, setPokeArr] = useState<IPokeUrl[] | undefined>([])

    useEffect(() => {
        if (searchByName) {
            setPokeArr(pokes?.filter(poke => poke.name === searchByName))
        }
        else {
            setPokeArr(pokes)
        }
    }, [searchByName, pokes])

    return (
        <Grid container justifyContent="center" sx={{ background: "linear-gradient(117deg, #012066 30%, #5c0606)" }}>
            {pokeArr && pokeArr.map(poke => <Poke key={poke.url} poke={poke} />)}
        </Grid>
    )
}