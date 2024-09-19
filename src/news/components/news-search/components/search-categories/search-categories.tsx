'use client';

import { useQueryString } from '~/common/models/hooks';
import { NEWS_CATEGORIES } from '~/news/models/constants/categories';
import { root } from './search-categories.css';
import { DropDown } from '@djeka07/ui';

type SearchCategoriesProps = {
  category?: string;
};

const SearchCategories = ({ category }: SearchCategoriesProps) => {
  const [, setQuery] = useQueryString('category');

  const onChange = (category: string) => {
    setQuery(category);
  };

  return (
    <div className={root}>
      <DropDown
        label="Category"
        name="category"
        onChange={({ value }) => onChange(value)}
        items={NEWS_CATEGORIES.map((newsCategory) => ({
          name: newsCategory,
          value: newsCategory,
          isSelected: newsCategory === category,
        }))}
      />
    </div>
  );
};

export default SearchCategories;
