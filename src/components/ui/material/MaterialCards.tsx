import { Card, CardContent, CardMedia, CardActions, Button, Typography, Stack } from '@mui/material';

export function MaterialCards() {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" gutterBottom>Cards</Typography>
      <Stack direction="row" spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random/345x140"
            alt="random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Media Card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A card with media content and description
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Basic Card
            </Typography>
            <Typography variant="body2">
              A simple card with text content only
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">Action</Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
}
