import { Container, Grid, Typography } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <Typography variant="h5">Systems</Typography>
          <Typography variant="body1">Systems</Typography>
          {user ? (
            <Link to="/notes"> View Notes for {user.email} </Link>
          ) : (
            <React.Fragment>
              <Link to="/join">Sign up </Link>
              <Link to="/login">Log In </Link>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
      <Link to="/posts">Blog Posts</Link>
    </Container >
  );
}
