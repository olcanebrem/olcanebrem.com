'use client'
import { Container, Title, SimpleGrid, Box } from '@mantine/core';
import Hero from '@/components/ui/mantine/Hero';
import PostCard from '@/components/ui/mantine/PostCard';
import ProjectCard from '@/components/ui/mantine/ProjectCard';
import MantineClientProvider from '@/components/providers/MantineClientProvider';
import { useEffect, useState } from 'react';
import { getRecentPosts } from '@cms/api/blog';
import { getFeaturedProjects } from '@cms/api/portfolio';

export default function ContentSection() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getRecentPosts(3);
      const projects = await getFeaturedProjects(3);
      setRecentPosts(posts);
      setFeaturedProjects(projects);
    }
    fetchData();
  }, []);

  return (
    <MantineClientProvider>
    <Container size="lg" style={{ backgroundColor: 'var(--md-sys-color-surface)', color: 'var(--md-sys-color-on-surface)' }}>
      <Hero />

      <Box mb={48}>
        <Title order={2} size="h2" ta="center" mb="xl" style={{ color: 'var(--md-sys-color-on-surface)' }}>
          Son Yazılar
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {recentPosts.map((post: any) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </SimpleGrid>
      </Box>

      <Box mb={48}>
        <Title order={2} size="h2" ta="center" mb="xl">
          Öne Çıkan Projeler
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {featuredProjects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
    </MantineClientProvider>
      );
}
