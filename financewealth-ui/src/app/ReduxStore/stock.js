import { configureStore } from '@reduxjs/toolkit';
import slicerTesting from './testing/slicerTesting';

export const stock = () => {
    return configureStore({
        reducer: {
            counter: slicerTesting
        }
    });
};