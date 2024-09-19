'use client';

import { useQueryString } from '~/common/models/hooks';
import { root } from '../search-categories/search-categories.css';
import { NEWS_SORT_BY } from '~/news/models/constants/sort-by';
import { DropDown } from '@djeka07/ui';

type SearchCategoriesProps = {
  sortBy?: string;
};

const SortBy = ({ sortBy }: SearchCategoriesProps) => {
  const [, setQuery] = useQueryString('sortBy');

  const onChange = (sortBy: string) => {
    setQuery(sortBy);
  };

  return (
    <div className={root}>
      <DropDown
        label="Sort by"
        name="sortBy"
        onChange={({ value }) => onChange(value)}
        items={NEWS_SORT_BY.map((sort) => ({
          name: sort.name,
          value: sort.value,
          isSelected: sort.value === sortBy,
        }))}
      />
    </div>
  );
};

export default SortBy;
