'use client';

import { useEffect, useRef, useState } from 'react';
import { SearchBar } from './components/news-search-bar';
import { SearchCategories } from './components/search-categories';
import { root } from './news-search.css';
import { SortBy } from './components/sort-by';

type NewsSearchProps = {
  query?: string;
  category?: string;
  sortBy?: string;
  showCategory?: boolean;
  showSortBy?: boolean;
};

const NewsSearch = ({ query, category, showCategory, showSortBy, sortBy }: NewsSearchProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const currentRef = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1);
      },
      { threshold: [1] },
    );

    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className={root({ isSticky })} ref={ref}>
      <SearchBar query={query} />
      {showCategory && <SearchCategories category={category} />}
      {showSortBy && <SortBy sortBy={sortBy} />}
    </div>
  );
};

export default NewsSearch;
