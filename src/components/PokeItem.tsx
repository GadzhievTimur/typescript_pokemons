import { Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { IPokeFetchCard, IPokeUrl } from '../types/types'
import { getTypeColor, logotype } from "../switchers/switchers"


const styles = {
    types: {
        width: "100%",
        minHeight: '48px',
        maxHeight: '48px',
        background: "transparent",
        borderRadius: "5px",
        color: "white",

    },
    paper: {
        borderRadius: '5px',
        padding: '10px',
        width: "180px",
        height: "310px",
        border: "1px solid #ffa500bf",
        background: "transparent"
    },
    logo: {
        display: "flex",
        width: "30px",
        height: "30px",
    },
    sprite: {
        height: "100px",
        width: "100px"
    },
    spriteWrapper: {
        padding: '5px',
        boxShadow: "0 0 4px 0",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "-30px",
        marginBottom: "20px",
    },
    gridTypes: {
        bottom: 0,
        left: 0,
        right: 0,
        padding: "0 10px",
    },
    hrStyle: {
        width: "50%",
        border: "transparent",
        borderRadius: "5px",
        background: "linear-gradient(to right, rgba(255, 165, 0, 0.75), rgb(255 210 126 / 75%))",
        height: "3px"
    }
}

interface PokeItemProps {
    poke: IPokeUrl
}

export const Poke: FC<PokeItemProps> = ({ poke }) => {
    const [pokemon, setPokemon] = useState<IPokeFetchCard>()
    const fetchUrls = async () => {
        const response = await axios.get(poke.url)
        setPokemon({
            sprite: response.data.sprites.front_default,
            types: response.data.types,
            name: response.data.name,
            id: response.data.id
        })
    }

    useEffect(() => {
        fetchUrls()
    }, [])


    const pokemonsType = pokemon?.types[0].type.name
    const pokemonsNames = pokemon && pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1);
    return (
        <Grid item sx={{ margin: "10px" }}>
            <Paper sx={{ ...styles.paper, position: "relative" }}>
                <Grid container justifyContent='flex-end'>
                    <img
                        src={pokemonsType && logotype(pokemonsType)}
                        alt={pokemonsType && logotype(pokemonsType)}
                        style={styles.logo}
                    />
                </Grid>

                <Grid container sx={styles.spriteWrapper} justifyContent='center'>
                    <img src={pokemon?.sprite} alt={pokemon?.name} style={styles.sprite} />
                </Grid>
                <Grid container justifyContent="center" alignContent="center" sx={styles.types} >
                    <Typography textAlign="center" letterSpacing="2px" fontWeight="600">
                        {pokemonsNames}
                    </Typography>
                </Grid>
                <hr style={styles.hrStyle} />
                <Grid container flexWrap={"nowrap"} justifyContent='space-between' mb='10px' position="absolute" sx={styles.gridTypes}>
                    {pokemon?.types.map(poketype =>
                        <Typography
                            textAlign='center'
                            width='100%'
                            key={v4()}
                            sx={{ background: getTypeColor(poketype.type.name) }}>
                            {poketype.type.name}
                        </Typography>
                    )}
                </Grid>
            </Paper >
        </Grid >
    )
}
