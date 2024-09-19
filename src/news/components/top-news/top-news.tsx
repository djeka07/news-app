import fetchNews from '~/news/models/actions/fetch-top-news';
import { NewsList } from '../news-list';
import { NewsResponse } from '~/news/models/services/generated/news.generated';
import fetchReadingListServerAction from '~/news/models/actions/fetch-reading-list';

export type TopNewsProps = {
  query?: string;
  category?: string;
};

const TopNews = async ({ category, query }: TopNewsProps) => {
  const newsResponse = await fetchNews(query, category);
  return <NewsList response={newsResponse} />;
};

export default TopNews;
