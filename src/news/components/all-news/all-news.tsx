import fetchAllNews from '~/news/models/actions/fetch-all-news';
import { NewsResponse } from '~/news/models/services/generated/news.generated';
import { popularity, publishedAt, relevancy } from '../../models/constants/sort-by';
import { NewsList } from '../news-list';
import fetchUserServerAction from '~/news/models/actions/fetch-user';

export type SortBy = typeof relevancy | typeof popularity | typeof publishedAt;

export type AllNewsProps = {
  query?: string;
  sortBy?: SortBy;
};

const AllNews = async ({ query, sortBy }: AllNewsProps) => {
  const userResponse = await fetchUserServerAction();
  const response = await fetchAllNews(query, userResponse?.language, sortBy);
  return <NewsList response={response as NewsResponse} />;
};

export default AllNews;
