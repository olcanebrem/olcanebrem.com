import { Tooltip, Button, Container, Group } from '@mantine/core';

export function MantineTooltipDemo() {
  return (
    <Container size="lg">
      <Group>
        <Tooltip label="Default tooltip">
          <Button variant="filled">Hover me</Button>
        </Tooltip>

        <Tooltip
          label="Multiline tooltip"
          multiline
          position="bottom-end"
          withArrow
        >
          <Button variant="light">With arrow and position</Button>
        </Tooltip>

        <Tooltip.Group openDelay={500}>
          <Tooltip label="Tooltip 1">
            <Button variant="outline">Group 1</Button>
          </Tooltip>
          <Tooltip label="Tooltip 2">
            <Button variant="outline">Group 2</Button>
          </Tooltip>
        </Tooltip.Group>
      </Group>
    </Container>
  );
}
