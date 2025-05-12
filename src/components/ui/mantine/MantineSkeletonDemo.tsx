import { Skeleton, Container, Grid, Space } from '@mantine/core';

export function MantineSkeletonDemo() {
  return (
    <Container size="lg">
      <Grid>
        <Grid.Col span={6}>
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={70} radius="md" />
          <Space h="md" />
          <Skeleton height={8} mt={6} width="40%" radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
          <Skeleton height={8} mt={6} width="30%" radius="xl" />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
