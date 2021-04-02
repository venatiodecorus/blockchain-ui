import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountList, fetchAccounts } from './accountSlice';

export function AccountList() {
    const accounts = useSelector(selectAccountList);
    const dispatch = useDispatch()

    const listItems = accounts.map((account,index) => <li key={index}>{account.Address}</li>)

    useEffect(() => {
        dispatch(fetchAccounts())
    }, [dispatch])

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}