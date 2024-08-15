import { useState } from 'react';

const useInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    function handleValueChange({ target }) {
        setValue(target.value);
    }

    return [value, handleValueChange, setValue];
};

export default useInput;