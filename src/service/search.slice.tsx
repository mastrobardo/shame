import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ISearchState {
  value: string
}

const initialState = { value: '' } as ISearchState;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state,  action: PayloadAction<string>) {
      state.value = action.payload;
    },
    clearSearchValue(state) {
      state.value = '';
    },
  },
});

export const selectFilterValue = (state: ISearchState) =>{
  console.log(state, 'state');
  //@ts-ignore
  return  state.search.value;
};

export const { setSearchValue, clearSearchValue } = searchSlice.actions;
export default searchSlice.reducer;