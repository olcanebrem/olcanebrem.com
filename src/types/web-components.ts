export interface Component {
  id: string;
  name: string;
  type: string;
  content: string;
  description?: string;
  m3Link?: string;
}

export interface PageProps {
  currentPage: number;
  components: Component[];
  totalPages: number;
} 