import NewsListSkeleton from '../news-list/news-list.skeleton';
import AllNews, { AllNewsProps, SortBy } from './all-news';
import { Suspense } from 'react';

const AllNewsSuspense = ({ query, sortBy = 'popularity' }: AllNewsProps) => (
  <Suspense key={`${query}-${sortBy}`} fallback={<NewsListSkeleton />}>
    <AllNews query={query} sortBy={sortBy} />
  </Suspense>
);
export type { SortBy };
export { AllNewsSuspense, AllNews };
