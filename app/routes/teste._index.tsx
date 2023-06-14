import { Container, Grid, Typography } from "@mui/material";

export default function Teste() {
    return (
        <Container>
            <Grid container>
                <Grid item md={12}>
                    <Typography variant="h1">Teste@123</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}