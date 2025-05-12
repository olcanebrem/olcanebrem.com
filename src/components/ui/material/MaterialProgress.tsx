import { CircularProgress, LinearProgress, Stack, Typography, Box } from '@mui/material';

export function MaterialProgress() {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" gutterBottom>Progress</Typography>
      
      <Box sx={{ width: '100%' }}>
        <Typography variant="subtitle1">Linear Progress</Typography>
        <Stack spacing={2}>
          <LinearProgress />
          <LinearProgress color="secondary" />
          <LinearProgress variant="determinate" value={75} />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle1">Circular Progress</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress variant="determinate" value={75} />
        </Stack>
      </Box>
    </Stack>
  );
}
