// Bileşen tipi tanımı
export interface Component {
  id: string;
  name: string;
  type: 'dialog' | 'text-field' | 'button' | 'menu' | 'toast' | 'clock' | 'chip';
  content: {
    title?: string;
    message?: string;
    label?: string;
    icon?: string;
    variant?: 'filled' | 'outlined' | 'text' | 'tonal' | 'elevated';
    menuItems?: { label: string; icon?: string }[];
    clockMarkers?: { angle: number; label: string }[];
  };
}

export interface Props {
  currentPage: number;
  components: Component[];
  totalPages: number;
}

export function getComponentPaths(components: Component[], itemsPerPage: number) {
  return async function getStaticPaths() {
    const totalComponents = components.length;
    const totalPages = Math.ceil(totalComponents / itemsPerPage);
    
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return pages.map((page) => ({
      params: { page: page.toString() },
      props: { 
        currentPage: page,
        components: components.slice((page - 1) * itemsPerPage, page * itemsPerPage),
        totalPages
      } as Props
    }));
  };
} 