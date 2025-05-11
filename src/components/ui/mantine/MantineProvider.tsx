import { MantineProvider as BaseMantineProvider } from '@mantine/core';

interface MantineProviderProps {
  children: React.ReactNode;
}

export default function MantineProvider({ children }: MantineProviderProps) {
  return (
    <BaseMantineProvider
      theme={{
        primaryColor: 'violet',
        fontFamily: 'var(--font-inter)',
        headings: {
          fontFamily: 'var(--font-inter)',
        },
      }}
    >
      {children}
    </BaseMantineProvider>
  );
}
