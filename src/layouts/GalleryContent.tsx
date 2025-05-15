'use client'
import { Container, Title, SimpleGrid, Image, Box } from '@mantine/core'
import MantineClientProvider from '@/components/providers/MantineClientProvider'

export default function GalleryContent() {
  return (
    <section className="w-full py-16 bg-surface text-on-surface">
      <div className="container mx-auto px-4">
        <MantineClientProvider>
        <Container size="xl">
          <Title order={2} size="h2" ta="center" mb="xl" className="text-on-surface">Galeri</Title>
          <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg">
            <Box className="bg-surface-variant" style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 'var(--mantine-radius-md)' }}>
              <Image
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Random 1"
                style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
                className="hover:scale-110"
              />
            </Box>
            <Box className="bg-surface-variant" style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 'var(--mantine-radius-md)' }}>
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Random 2"
                style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
                className="hover:scale-110"
              />
            </Box>
            <Box className="bg-surface-variant" style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 'var(--mantine-radius-md)' }}>
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Random 3"
                style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
                className="hover:scale-110"
              />
            </Box>
            <Box className="bg-surface-variant" style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 'var(--mantine-radius-md)' }}>
              <Image
                src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80"
                alt="Random 4"
                style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
                className="hover:scale-110"
              />
            </Box>
          </SimpleGrid>
        </Container>
        </MantineClientProvider>
      </div>
    </section>
  )
}
