import { Button, Stack, Typography } from '@mui/material';
// Ikonları dinamik olarak yüklüyoruz
const AddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
  </svg>
);

const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" />
  </svg>
);

export function MaterialButtons() {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" gutterBottom>Buttons</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Primary</Button>
        <Button variant="outlined">Secondary</Button>
        <Button variant="text">Text</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<AddIcon />}>
          With Icon
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
}
