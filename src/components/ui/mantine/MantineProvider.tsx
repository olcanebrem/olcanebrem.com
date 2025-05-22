import { MantineProvider as BaseMantineProvider, createTheme } from '@mantine/core';

interface MantineProviderProps {
  children: React.ReactNode;
}

export default function MantineProvider({ children }: MantineProviderProps) {
  const theme = createTheme({
    primaryColor: 'violet',
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    headings: {
      fontFamily: 'var(--font-inter)',
    },
  });

  return (
    <BaseMantineProvider theme={theme}>
      {children}
    </BaseMantineProvider>
  );
}
