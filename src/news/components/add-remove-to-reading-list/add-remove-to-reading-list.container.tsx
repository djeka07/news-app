'use client';

import { useState } from 'react';
import AddRemoveToReadingList, { State } from './add-remove-to-reading-list';
import { NewsArticleResponse } from '~/news/models/services/generated/news.generated';
import addOrRemoveToReadingListServerAction from '~/news/models/actions/add-or-remove-to-reading-list';

type AddRemoveToReadingListContainerProps = {
  item: NewsArticleResponse;
  className?: string;
};

const AddRemoveToReadingListContainer = ({ item, className }: AddRemoveToReadingListContainerProps) => {
  const [state, setState] = useState<State>({
    isInList: item.isInReadingList,
    isUpdating: false,
    action: undefined,
  });

  const onClickAction = async (): Promise<void> => {
    try {
      const isNotInList = !state.isInList;
      setState((prev) => ({ ...prev, isUpdating: true }));
      await addOrRemoveToReadingListServerAction(item.url, isNotInList ? item : undefined);
      setState((prev) => ({
        ...prev,
        action: !prev.isInList ? 'added' : 'removed',
        isInList: !prev.isInList,
        isUpdating: false,
      }));
      setTimeout(() => {
        setState((prev) => ({ ...prev, action: undefined }));
      }, 2000);
    } catch (error) {
      const err = error as { message?: string };
      setState((prev) => ({ ...prev, error: err?.message }));
    }
  };

  return <AddRemoveToReadingList className={className} state={state} onClick={onClickAction} />;
};

export default AddRemoveToReadingListContainer;
