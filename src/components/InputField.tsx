import { Button, Grid, Input } from '@mui/material'


export const InputField = () => {
    return (
        <Grid container sx={{marginTop: "-36px", borderBottom: "2px solid gray" }}>
            <Grid item sx={{ width: "50%", textAlign: "start",  justifyContent: "flex-start"}}>
                <Input placeholder="Type a pockemon's name here!" sx={{ width: "25.5%", background: "white" }} />
                <Button> Find </Button>
            </Grid>
            <Grid item sx={{ width: "50%", textAlign: "end", justifyContent: "flex-end"}}>
                <Input placeholder="Type a pockemon's name here!" sx={{ width: "25.5%", background: "white" }} />
                <Button> Find </Button>
            </Grid>
        </Grid>
    )
}
