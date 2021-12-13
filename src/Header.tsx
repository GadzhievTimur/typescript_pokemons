import { Grid } from '@mui/material'
import logo from './pokemons.png'

export const Header = () => {
    return (
        <Grid container sx={{ justifyContent: "center" }}>
            <img src={logo} alt={logo} style={{ height: "150px" }} />
        </Grid>
    )
}
