import { configureStore } from '@reduxjs/toolkit';
import slicerTesting from './testing/slicerTesting';
import selectedLanguage from './selectedLanguage/language';

export const stock = () => {
    return configureStore({
        reducer: {
            counter: slicerTesting,
            language: selectedLanguage
        }
    });
};