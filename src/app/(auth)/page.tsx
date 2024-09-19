import { TopNewsView } from '~/news/views';
import generateTitle from '~/news/views/top-news/genererate-title';

type IndexProps = { searchParams: { q?: string; category?: string } };

export async function generateMetadata({ searchParams }: IndexProps) {
  return {
    title: generateTitle(searchParams),
    description: generateTitle(searchParams, true),
  };
}

const Index = async ({ searchParams }: IndexProps) => (
  <TopNewsView query={searchParams?.q as string} category={searchParams?.category} />
);
export default Index;
