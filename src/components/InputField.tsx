import { Button, Grid, Input } from '@mui/material'
import { FC, useState } from 'react'

const styles = {
    mainGrid: {
        marginTop: "-36px",
        borderBottom: "2px solid gray"
    },
    leftGrid: {
        width: "50%",
        justifyContent: "flex-start"
    },
    rightGrid: {
        width: "50%",
        justifyContent: "flex-end"
    },
    input: {
        width: "25.5%",
        background: "white"
    },

}

interface InputFieldProps {
    setSearchByName: (name: string) => void,
    setSearchByType: (types: string[]) => void,
}

export const InputField: FC<InputFieldProps> = ({ setSearchByName, setSearchByType }) => {
    const [tempValNames, setTempValNames] = useState<string>('');
    const [tempValTypes, setTempValTypes] = useState<string>('');

    const handleSubmitName = (e: any) => {
        if (tempValNames.trim()) {
            if (e.keyCode === 13) {
                setSearchByName(tempValNames.toLowerCase())
                e.preventDefault();

            }
        }
    }

    return (
        <Grid container sx={styles.mainGrid}>
            <Grid item sx={{ ...styles.leftGrid, textAlign: "start" }}>
                <Input
                    onKeyDown={handleSubmitName}
                    value={tempValNames}
                    onChange={(e) => setTempValNames(e.target.value)}
                    placeholder="Type a pockemon's name here!"
                    sx={styles.input}
                />
                <Button> Find </Button>
            </Grid>
            <Grid item sx={{ ...styles.rightGrid, textAlign: "end" }}>
                <Input
                    value={tempValTypes}
                    onChange={(e) => setTempValTypes(e.target.value)}
                    placeholder="Type a pockemon's name here!"
                    sx={styles.input}
                />
                <Button> Find </Button>
            </Grid>
        </Grid>
    )
}
