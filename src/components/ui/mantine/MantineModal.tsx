import { useState } from 'react';
import { Modal, Button, TextInput, Group } from '@mantine/core';

export function MantineModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Authentication"
        centered
      >
        <TextInput
          label="Email"
          placeholder="your@email.com"
          mb="md"
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Your password"
          mb="md"
        />
        <Group justify="flex-end">
          <Button variant="filled" onClick={() => setOpened(false)}>Submit</Button>
        </Group>
      </Modal>

      <Button variant="filled" onClick={() => setOpened(true)}>Open Modal</Button>
    </>
  );
}
