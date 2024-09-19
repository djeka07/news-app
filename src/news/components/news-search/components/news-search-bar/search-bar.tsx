'use client';

import { TextInput } from '@djeka07/ui';
import debounce from 'lodash.debounce';
import { ChangeEvent } from 'react';
import { useQueryString } from '~/common/models/hooks';

type SearchBarProps = {
  query?: string;
};

const SearchBar = ({ query }: SearchBarProps) => {
  const [, setQuery] = useQueryString('q');

  const internalOnInputChange = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value: val } = event.target;
      setQuery(val);
    },
    500,
    { leading: false, trailing: true },
  );

  return (
    <TextInput defaultValue={query || ''} type="search" label="Search" name="search" onChange={internalOnInputChange} />
  );
};

export default SearchBar;
