import { Container, Grid, Space, MantineProvider } from '@mantine/core';
import { MantineCard } from './MantineCard';
import { MantineAlert } from './MantineAlert';
import { MantineModal } from './MantineModal';

// Import styles
import '@mantine/core/styles.css';

export function MantineDemo() {
  return (
    <MantineProvider>
      <Container size="lg">
      <Grid>
        <Grid.Col span={12}>
          <MantineAlert />
        </Grid.Col>
        
        <Grid.Col span={12}>
          <Space h="md" />
        </Grid.Col>

        <Grid.Col span={4}>
          <MantineCard />
        </Grid.Col>

        <Grid.Col span={4}>
          <MantineModal />
        </Grid.Col>
      </Grid>
      </Container>
    </MantineProvider>
  );
}
