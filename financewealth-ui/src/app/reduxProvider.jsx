'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { stock } from './ReduxStore/stock';

const StoreProvider = ({children}) => {
    const stockRef = useRef();

    if(!stockRef.current) {
        stockRef.current = stock();
    }

    return <Provider store={stock()}>{children}</Provider>
}

export default StoreProvider;