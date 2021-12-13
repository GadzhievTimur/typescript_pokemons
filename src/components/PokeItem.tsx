import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { IPokeFetchCard, IPokeUrl } from './types/types'
import * as images from "./images/index"


const useStyles = makeStyles(() => ({
    typoImg: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        height: "200px",
    },
    imgSizes: {
        height: "135px",
        width: "135px"
    },
    cardStyles: {
        border: "1px solid gray",
        backgroundColor: "white",
        borderRadius: "20%",
    },
}))

const styles = {
    typography: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: "center",
    },
    typo: { justifyContent: "center", textAlign: "center" },
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


    const getTypeColor = (type: string) => {
        switch (type) {
            case "fire":
                return "#F08030"
            case "poison":
                return "#A040A0"
            case "fighting":
                return "#C03028"
            case "normal":
                return "#A8A878"
            case "water":
                return "#6890F0"
            case "flying":
                return "#A890F0"
            case "grass":
                return "#78C850"
            case "electric":
                return "#F8D030"
            case "ground":
                return "#E0C068"
            case "psychic":
                return "#F85888"
            case "rock":
                return "#B8A038"
            case "ice":
                return "#98D8D8"
            case "bug":
                return "#A8B820"
            case "dragon":
                return "#7038F8"
            case "ghost":
                return "#705898"
            case "dark":
                return "#705848"
            case "steel":
                return "#B8B8D0"
            case "fairy":
                return "#EE99AC"
            default:
                return "white";
        }
    }
    const logotype = (type: string) => {
        switch (type) {
            case "fire":
                return `${images.fire}`
            case "poison":
                return "images.poison"
            case "fighting":
                return "images.fighting"
            case "normal":
                return "images.normal"
            case "water":
                return "images.water"
            case "flying":
                return "images.flying"
            case "grass":
                return `${images.grass}`
            case "electric":
                return `${images.electric}`
            case "ground":
                return "images.ground"
            case "psychic":
                return `${images.psychic}`
            case "rock":
                return "images.rock"
            case "ice":
                return "images.ice"
            case "bug":
                return "images.bug"
            case "dragon":
                return "images.dragon"
            case "ghost":
                return "images.ghost"
            case "dark":
                return "images.ghost"
            case "steel":
                return "images.steel"
            case "fairy":
                return "images.fairy"

        }
    }
    const classes = useStyles()
    const pokemonsType = pokemon?.types[0].type.name
    return (
        <Grid item sx={{ border: "1px solid gray", margin: "5px" }}>
            <Paper sx={{ width: "180px", height: "260px", textAlign: "center", backgroundImage: `url(${pokemonsType && logotype(pokemonsType)})` }}>
                <Typography sx={{ backgroundColor: "white", paddingTop: "5px" }}>
                    {pokemon?.name}
                </Typography>
                <Grid item className={classes.typoImg}>
                    <Grid item className={classes.cardStyles}>
                        <img src={pokemon?.sprite} alt={pokemon?.name} className={classes.imgSizes} />
                    </Grid>
                </Grid>
                <Grid container flexWrap={"nowrap"} sx={{ marginBottom: "10px" }}>
                    {pokemon?.types.map(poketype =>
                        <Typography
                            key={v4()}
                            sx={{ ...styles.typography, backgroundColor: getTypeColor(poketype.type.name) }}>
                            {poketype.type.name}
                        </Typography>
                    )}
                </Grid>
            </Paper >
        </Grid >
    )
}
