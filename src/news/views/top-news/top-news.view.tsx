import { NewsSearch } from '~/news/components/news-search';
import { TopNewsSuspense } from '~/news/components/top-news';
import { Typography } from '@djeka07/ui';
import generateTitle from './genererate-title';
import { root, wrapper } from '../all-news/all-news.view.css';

type TopNewsViewProps = {
  query?: string;
  category?: string;
};

const TopNewsView = async ({ query, category }: TopNewsViewProps) => (
  <div className={root}>
    <Typography wordBreak="breakWord" variant="h1">
      {generateTitle({ q: query, category })}
    </Typography>
    <div className={wrapper}>
      <NewsSearch query={query} category={category} showCategory />
      <TopNewsSuspense query={query} category={category} />
    </div>
  </div>
);

export default TopNewsView;
