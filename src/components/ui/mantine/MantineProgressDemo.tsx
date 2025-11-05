import { Progress, Container, Stack } from '@mantine/core';

export function MantineProgressDemo() {
  return (
    <Container size="lg">
      <Stack>
        <Progress value={75} color="blue" radius="xl" size="md" striped animated />
        <Progress value={30} color="pink" radius="xl" size="md" />
        <Progress value={60} color="grape" radius="xl" size="md" />
        <Progress value={45} color="violet" radius="xl" size="md" />
      </Stack>
    </Container>
  );
}
