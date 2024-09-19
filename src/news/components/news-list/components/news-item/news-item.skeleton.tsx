import { Skeleton } from '@djeka07/ui';
import { authorPill, contentSkeleton, imageWrapper, root, textSkeleton } from './news-item.css';

const NewsItemSkeleton = () => (
  <div className={root()}>
    <div className={imageWrapper}>
      <Skeleton width="100%" height="220px" />
      <Skeleton className={authorPill()} width="110px" height="20px" />
      <Skeleton className={authorPill({ position: 'right' })} width="20px" height="20px" />
    </div>
    <div className={contentSkeleton}>
      <Skeleton width="80%" height="22px" />
      <Skeleton className={textSkeleton} width="100%" height="12px" amount={3} />
    </div>
  </div>
);

export default NewsItemSkeleton;
