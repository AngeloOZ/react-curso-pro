import { useEffect, useRef, useState } from 'react'
import { OnChangeArgs, Product, InitialValues } from '../interfaces/Product';

interface Props {
    product: Product;
    onChange?: (args: OnChangeArgs) => void
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: Props) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0)

        if (initialValues?.maxCount && newValue > initialValues?.maxCount) return

        setCounter(newValue)

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
    }
}
