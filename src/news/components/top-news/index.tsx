import NewsListSkeleton from '../news-list/news-list.skeleton';
import TopNews, { TopNewsProps } from './top-news';
import { Suspense } from 'react';

const TopNewsSuspense = ({ query, category }: TopNewsProps) => (
  <Suspense key={`${query}-${category}`} fallback={<NewsListSkeleton />}>
    <TopNews query={query} category={category} />
  </Suspense>
);

export { TopNewsSuspense, TopNews };
