import { Icon, Typography } from '@djeka07/ui';
import { authorPill, content, imageWrapper, readMore, root, dateTitleWrapper } from './news-item.css';
import { NewsItemImage } from '../news-item-image';
import { Link } from '~/common/components/links';
import { NewsArticleResponse } from '~/news/models/services/generated/news.generated';
import { createDate, formatDate } from '~/common/models/helpers/date';
import { AddRemoveToReadingListContainer } from '~/news/components/add-remove-to-reading-list';

type NewsListItemProps = {
  item: NewsArticleResponse;
};

const NewsItem = ({ item }: NewsListItemProps) => {
  return (
    <div className={root({ isRemoved: !item.isAvailable })}>
      <div className={imageWrapper}>
        <NewsItemImage title={item.title} urlToImage={item.urlToImage} />
        {item.author && (
          <div title={item.author} className={authorPill({ position: 'left', maxWidth: true })}>
            <Typography whiteSpace="noWrap" overflow="ellipsis" variant="body">
              {item.author}
            </Typography>
          </div>
        )}
        <AddRemoveToReadingListContainer className={authorPill({ position: 'right' })} item={item} />
      </div>
      <div className={content}>
        <div className={dateTitleWrapper}>
          <Typography size="small" variant="label">
            {formatDate(createDate(item.published))}
          </Typography>
          <Typography variant="h3">{item.title}</Typography>
        </div>
        {item.description && <Typography variant="body">{item.description}</Typography>}
        {item.isAvailable && (
          <Link target="_blank" isExternal href={item.url}>
            <span className={readMore}>
              Read more <Icon name="Right" color="input" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
