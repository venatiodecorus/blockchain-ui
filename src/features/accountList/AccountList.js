import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, selectAccountList } from './accountSlice';

export function AccountList() {
    const accounts = useSelector(selectAccountList);
    const dispatch = useDispatch()
}