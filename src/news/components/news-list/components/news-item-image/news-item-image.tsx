import { Icon } from '@djeka07/ui';
import Image from 'next/image';
import { root } from './news-item-image.css';
import { NewsArticleResponse } from '~/news/models/services/generated/news.generated';

type NewsItemImageProps = Pick<NewsArticleResponse, 'urlToImage' | 'title'>;

const NewsItemImage = ({ urlToImage, title }: NewsItemImageProps) => (
  <div className={root}>
    {!urlToImage ? (
      <Icon color="menu" name="Message" size="xxxlarge" />
    ) : (
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={`/api?url=${urlToImage}`}
        alt={title}
      />
    )}
  </div>
);

export default NewsItemImage;
