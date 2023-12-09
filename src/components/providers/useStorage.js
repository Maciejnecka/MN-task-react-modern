/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {
    try {
        const storedValue = localStorage.getItem(key);
        const initial = storedValue ? JSON.parse(storedValue) : initialValue;

        const [value, setValue] = useState(initial);

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value, initialValue]);

        return [value, setValue];
    } catch (error) {
        // eslint-disable-next-line
        console.error('Error parsing JSON:', error);
        return [initialValue, (setValue) => setValue(initialValue)];
    }
};

export default useStorage;
