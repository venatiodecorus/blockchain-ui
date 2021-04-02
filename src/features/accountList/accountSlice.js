import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAccounts = createAsyncThunk('accountList/fetchAccounts', async () => {
    const response = await fetch('http://localhost:8080/wallets')
                            .then(data => {return data.json()})
    return response;
})

export const accountSlice = createSlice({
    name: 'accountList',
    initialState: {
        accounts: [],
    },
    reducers: {
        // getAccounts: state => {

        // }
    },
    extraReducers: {
        [fetchAccounts.fulfilled]: (state, action) => {
            state.accounts = action.payload;
        }
    }
});

export const { getAccounts } = accountSlice.actions;

export const selectAccountList = state => state.accountList.accounts;

export default accountSlice.reducer;