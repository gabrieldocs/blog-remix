import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/post.server";
import { Box, Container, Grid, Typography } from "@mui/material";
import { VerifiedUser } from "@mui/icons-material";

export const loader = async () => {
    const posts = await getPosts()
    console.log(posts)
    return json({ posts })
}

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
    return (
        <Container>
            <Grid container gap={2}>
                <Grid item md={12}>
                    <Box p={3}>
                        <Typography variant="h5">Posts</Typography>
                        <Typography variant="body1">See all posts from this blog below</Typography>
                    </Box>
                </Grid>
                {posts.map((post) => (
                    <Grid
                        item
                        md={3}
                        key={post.slug}
                        sx={{
                            border: "solid gray 1px",
                            minHeight: "200px",
                            padding: "12px"
                        }}>
                        <VerifiedUser />
                        <Typography variant="body1">
                            <Link to={post.slug}>
                                {post.title}
                            </Link>
                        </Typography>
                        <Typography variant="caption">
                            {post.createdAt}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}