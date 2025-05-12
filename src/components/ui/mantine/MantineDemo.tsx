import { Container, Grid, Space, MantineProvider, Stack } from '@mantine/core';
import { MantineCard } from './MantineCard';
import { MantineAlert } from './MantineAlert';
import { MantineModal } from './MantineModal';
import { MantineSkeletonDemo } from './MantineSkeletonDemo';
import { MantineProgressDemo } from './MantineProgressDemo';
import { MantineTooltipDemo } from './MantineTooltipDemo';

// Import styles
import '@mantine/core/styles.css';

export function MantineDemo() {
  return (
    <MantineProvider>
      <Container size="lg">
      <Stack>
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

        <div>
          <h3 className="text-xl font-semibold mb-4">Skeleton Loading</h3>
          <MantineSkeletonDemo />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Progress Bars</h3>
          <MantineProgressDemo />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Tooltips</h3>
          <MantineTooltipDemo />
        </div>
      </Stack>
      </Container>
    </MantineProvider>
  );
}
