

import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                width: { md: 450 },
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4
            }}
        >

            <Grid container
                direction='row'
                justifyContent='center'
            >
                <CircularProgress color='warning' />
            </Grid>
        </Grid>
    )
}
