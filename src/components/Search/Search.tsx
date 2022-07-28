import { useAppDispatch } from '@hooks/app.hook';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { setSearchValue, clearSearchValue } from '@service/search.slice';

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearInput = () => {
    dispatch(clearSearchValue());
  };

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className='search-box'>
      <input role={'input'} type="text" value={value} onChange={handleChange} />
      <button onClick={handleClearInput}>X</button>
    </div>
  );
};