import { Container, Stack, ThemeProvider, createTheme } from '@mui/material';
import { MaterialButtons } from './MaterialButtons';
import { MaterialCards } from './MaterialCards';
import { MaterialProgress } from './MaterialProgress';

const theme = createTheme();

export function MaterialDemo() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack spacing={4}>
          <MaterialButtons />
          <MaterialCards />
          <MaterialProgress />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
