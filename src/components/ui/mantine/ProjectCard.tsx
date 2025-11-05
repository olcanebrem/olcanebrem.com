import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    slug: string;
    technologies?: string[];
    demoUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={project.image || 'https://placehold.co/600x400'}
          height={200}
          alt={project.title}
        />
      </Card.Section>

      <Stack mt="md" gap="xs">
        <Text fw={500} size="lg">
          {project.title}
        </Text>

        <Text size="sm" c="dimmed" lineClamp={2}>
          {project.description}
        </Text>

        {project.technologies && (
          <Group gap={5} mt="xs">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="light" color="violet">
                {tech}
              </Badge>
            ))}
          </Group>
        )}

        <Group mt="md">
          <Button component="a" href={`/portfolio/${project.slug}`} variant="light" radius="md">
            Detaylar
          </Button>
          {project.demoUrl && (
            <Button component="a" href={project.demoUrl} variant="filled" radius="md" target="_blank">
              Demo
            </Button>
          )}
        </Group>
      </Stack>
    </Card>
  );
}
