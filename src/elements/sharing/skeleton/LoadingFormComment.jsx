import { Grid, Button, Stack, Skeleton } from "@mui/material";

function LoadingFormComment() {
    return (
        <Grid
            container
            item
            direction="column"
        >
            <Stack spacing={2}>
                <Skeleton
                    variant="rectangular"
                    height={150}
                />
                <Skeleton
                    width="100%"
                >
                    <Button>Add Comment</Button>
                </Skeleton>
            </Stack>
        </Grid>
    )
}

export default LoadingFormComment;
