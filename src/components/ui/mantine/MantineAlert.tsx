import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export function MantineAlert() {
  return (
    <Alert variant="light" color="blue" title="Alert title" icon={<IconAlertCircle />}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
      praesentium? Quis voluptatem consequuntur esse quos.
    </Alert>
  );
}
