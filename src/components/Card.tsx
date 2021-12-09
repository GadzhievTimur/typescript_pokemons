import { Grid } from '@mui/material'
import { FC } from "react"

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}


interface CardProps {
    width?: string,
    variant: CardVariant,

}

export const Card: FC<CardProps> = ({ width, children, variant }) => {
    return (
        <Grid sx={{
            width,
            border: variant === CardVariant.outlined ? "1px solid lightgray" : "none",
            background: variant === CardVariant.primary ? "lightgray" : ""
        }}
        >
            {children}
        </Grid>
    )
}
