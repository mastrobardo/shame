import { useAppDispatch } from '@hooks/app.hook';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { setSearchValue, clearSearchValue } from '@service/search.slice';
import { ReactComponent as Glass } from '@assets/svg/magnifying.svg';
import './Search.style.scss';

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearInput = () => {
    dispatch(clearSearchValue());
    setValue('');
  };

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className='search-box'>
      <Glass className={'search-box__icon'}/>
      <input className={'search-box__input'} role={'input'} type="text" value={value} placeholder={'Search'} onChange={handleChange} />
      {!!value && <a className={'search-box__clearbutton'} onClick={handleClearInput}>X</a>}
    </div>
  );
};