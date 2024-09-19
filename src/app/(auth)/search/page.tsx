import { Metadata } from 'next';
import { SortBy } from '~/news/components/all-news';
import { AllNewsView } from '~/news/views';

type AllNewsPageProps = { searchParams: { q?: string; sortBy?: SortBy } };

export const metadata: Metadata = {
  title: 'Search all news',
  description: 'Search amoung all news',
};

const AllNewsPage = async ({ searchParams }: AllNewsPageProps) => (
  <AllNewsView query={searchParams?.q as string} sortBy={searchParams?.sortBy} />
);
export default AllNewsPage;
