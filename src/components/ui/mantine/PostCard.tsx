import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';

interface PostCardProps {
  post: {
    title: string;
    description: string;
    date: string;
    image: string;
    slug: string;
    tags?: string[];
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={post.image || 'https://placehold.co/600x400'}
          height={160}
          alt={post.title}
        />
      </Card.Section>

      <Stack mt="md" gap="xs">
        {post.tags && (
          <Group gap={5}>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="light" color="blue">
                {tag}
              </Badge>
            ))}
          </Group>
        )}

        <Text fw={500} size="lg" truncate="end">
          {post.title}
        </Text>

        <Text size="sm" c="dimmed" lineClamp={2}>
          {post.description}
        </Text>

        <Group justify="space-between" mt="md">
          <Text size="sm" c="dimmed">
            {new Date(post.date).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <Button component="a" href={`/blog/${post.slug}`} variant="light" radius="md">
            Devamını Oku
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}
