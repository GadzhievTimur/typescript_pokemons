import { Grid } from '@mui/material'
import { FC } from 'react'
import { Poke } from './PokeItem'
import { IPoke } from './types/types'


interface PokeListProps {
    pokes: IPoke[]
}
export const PokeList: FC<PokeListProps> = ({ pokes }) => {
    return (
        <Grid container>
            {pokes.length !== 0 ? pokes.results.map(poke =>
                <Poke key={poke.url} poke={poke} />
            ) : null}
        </Grid>
    )
}
