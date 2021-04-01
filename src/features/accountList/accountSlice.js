import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: 'accountList',
    initialState: {
        accounts: [],
    },
    reducers: {
        add: state => {
            state.accounts.push('accounnt');
        }
    }
});

export const { add } = accountSlice.actions;

export const selectAccountList = state => state.accounts;

export default accountSlice.reducer;