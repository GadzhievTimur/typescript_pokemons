import { Grid } from '@mui/material'
import { FC } from 'react'
import { Poke } from './PokeItem'
import { IPokeFetch } from './types/types'


interface PokeListProps {
    pokes?: IPokeFetch
}
export const PokeList: FC<PokeListProps> = ({ pokes }) => {
    return (
        <Grid container>
            {pokes?.results.length !== 0 ? pokes?.results.map(poke =>
                <Poke key={poke.url} poke={poke} />
            ) : <div></div>}
        </Grid>
    )
}
