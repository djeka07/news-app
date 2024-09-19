'use client';

import { useCallback, useMemo } from 'react';
import { usePathname } from './use-pathname';
import useRouter from './use-router';
import useSearchParams from './use-search-params';

type UseQueryStringReturn = [string | null, (value: string) => void];

const useQueryString = (name: string): UseQueryStringReturn => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = useMemo(() => new URLSearchParams(searchParams.toString()).get(name), [name, searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const setQueryString = useCallback(
    (value: string) => {
      push(`${pathname}?${createQueryString(name, value)}`);
    },
    [createQueryString, name, pathname, push],
  );

  return [query, setQueryString];
};

export default useQueryString;
