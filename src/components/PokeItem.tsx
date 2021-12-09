import { Grid, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { IPoke } from './types/types'
import { CSSProperties } from '@mui/styles'

const styles: CSSProperties = {
    typoImg: { display: "Flex", alignItems: "center", justifyContent: "center",textAlign: "center", height: "300px", width: "603px" ,background: "pink" },
    typoLeftTypes: {width: "50%", background: "green"},
    typoRightTypes: {width: "50%", background: "blue"},
    paper: {display: "flex", width: "603px"}
}

interface PokeItemProps {
    poke: IPoke
}

export const Poke: FC<PokeItemProps> = ({ poke }) => {
    return (
        <Grid item>
            <Paper sx={{ width: "605px", height: "350px", textAlign: "center" }}>
                <Paper>
                    <Typography sx={styles.typoImg}>Image is here</Typography>
                </Paper>
                <Paper sx={styles.paper}>
                    <Typography sx={styles.typoLeftTypes}> Type of pokemon is here  </Typography>
                    <Typography sx={{background: "black", color: "white"}}>{" | "}</Typography>
                    <Typography sx={styles.typoRightTypes}> Type of pokemon is here  </Typography>

                </Paper> 
                <Typography sx={{color:"white", background: "gray", width: "603px"}}> {`${poke.name} has this url --> |${poke.url}| <--`} </Typography>
            </Paper>
        </Grid>
    )
}
