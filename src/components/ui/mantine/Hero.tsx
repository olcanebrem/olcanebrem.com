import { Container, Title, Text, Button, Group, Box } from '@mantine/core';

export default function Hero() {
  return (
    <Box
      style={{
        background: 'linear-gradient(to right, var(--mantine-color-indigo-5), var(--mantine-color-violet-5), var(--mantine-color-pink-5))',
        position: 'relative',
        borderRadius: 'var(--mantine-radius-xl)',
        overflow: 'hidden',
      }}
      py={40}
      mb={32}
    >
      <Container size="lg">
        <Box pos="relative" style={{ zIndex: 1 }}>
          <Title
            order={1}
            size="h1"
            style={{
              fontSize: 'var(--mantine-font-size-xl-4)',
              fontWeight: 800,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            ta="center"
            c="white"
            mb="md"
          >
            Hoş Geldin!
          </Title>
          
          <Text
            size="xl"
            ta="center"
            maw={720}
            mx="auto"
            mb="xl"
            c="white"
          >
            Ben Olcan, bir web geliştirici ve tasarımcıyım. Dijital dünyada görünür olmak isteyen markalar için çalışıyorum.
          </Text>

          <Group justify="center" gap="md">
            <Button
              component="a"
              href="/blog"
              variant="white"
              size="lg"
              radius="xl"
              style={{ color: 'var(--mantine-color-violet-6)' }}
            >
              Blog'u Keşfet
            </Button>
            <Button
              component="a"
              href="/portfolio"
              variant="outline"
              size="lg"
              radius="xl"
              c="white"
              style={{ borderColor: 'white' }}
            >
              Projeleri Gör
            </Button>
          </Group>
        </Box>

        {/* Decorative background pattern */}
        <Box
          pos="absolute"
          inset={0}
          style={{
            opacity: 0.1,
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E')`,
          }}
        />
      </Container>
    </Box>
  );
}
