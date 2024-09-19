import { root } from './news-list.css';
import { NewsItemSkeleton } from './components/news-item';

type NewsListSkeletonProps = {
  amount?: number;
};

const NewsListSkeleton = ({ amount = 10 }: NewsListSkeletonProps) => (
  <div className={root}>
    {[...new Array(amount)].map((_, index) => (
      <NewsItemSkeleton key={`news-item-${index}`} />
    ))}
  </div>
);

export default NewsListSkeleton;
