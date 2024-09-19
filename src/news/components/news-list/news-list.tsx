import { For } from '@djeka07/ui';
import fetchNews from '~/news/models/actions/fetch-top-news';
import { NewsItem } from './components/news-item';
import { root } from './news-list.css';
import { EmptyResult } from './components/empty-result';
import { NewsResponse } from '~/news/models/services/generated/news.generated';

export type NewsListProps = {
  response: NewsResponse;
};

const NewsList = async ({ response }: NewsListProps) => (
  <div className={root}>
    <For each={response?.items} fallback={<EmptyResult />} keyed={(item, index) => `${item.title}-${index}`}>
      {(item) => <NewsItem item={item} />}
    </For>
  </div>
);

export default NewsList;
