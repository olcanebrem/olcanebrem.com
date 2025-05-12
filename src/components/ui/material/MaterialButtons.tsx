import { Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

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
