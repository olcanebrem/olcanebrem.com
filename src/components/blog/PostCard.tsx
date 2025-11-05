import React from 'react';

interface PostCardProps {
  title: string;
  summary: string;
  date: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, summary, date, slug }) => (
  <a href={`/blog/${slug}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{summary}</p>
    <span className="text-xs text-gray-400">{date}</span>
  </a>
);

export default PostCard;
