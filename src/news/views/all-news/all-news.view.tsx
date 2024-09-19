import { AllNewsSuspense, SortBy } from '~/news/components/all-news';
import { NewsSearch } from '~/news/components/news-search';
import { publishedAt } from '~/news/models/constants/sort-by';
import { root, wrapper } from './all-news.view.css';
import { Typography } from '@djeka07/ui';

type AllNewsViewProps = {
  query?: string;
  sortBy?: SortBy;
};

const AllNewsView = async ({ query, sortBy = publishedAt }: AllNewsViewProps) => (
  <div className={root}>
    <Typography variant="h1">Search all news</Typography>
    <div className={wrapper}>
      <NewsSearch query={query} showSortBy sortBy={sortBy} />
      <AllNewsSuspense query={query} sortBy={sortBy} />
    </div>
  </div>
);

export default AllNewsView;
