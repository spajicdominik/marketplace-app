import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import useFetchPriceRange from '../../hooks/priceFilter/useFetchPriceRange';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import categorySlice from '../../store/category';
import { Button } from 'antd';

function IntegerStep({ minPrice, maxPrice, onChange, inputValue }: { minPrice: number | undefined, maxPrice: number | undefined, onChange: any, inputValue: number | undefined }) {
    return (
        <Row>
            <Col span={16}>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={minPrice}
                    max={maxPrice}
                    style={{ margin: '0 16px' }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

export default function PriceFilter() {
    const priceRange = useFetchPriceRange();
    const minPrice = priceRange?.min_price;
    const maxPrice = priceRange?.max_price;
    const dispatch = useDispatch<AppDispatch>();

    const [minPriceValue, setMinPriceValue] = useState(minPrice);
    const [maxPriceValue, setMaxPriceValue] = useState(maxPrice);

    useEffect(() => {
        if (minPrice !== undefined) {
            setMinPriceValue(minPrice);
            dispatch(categorySlice.actions.setMinPrice(minPrice));
        }
        if (maxPrice !== undefined) {
            setMaxPriceValue(maxPrice);
            dispatch(categorySlice.actions.setMaxPrice(maxPrice));
        }
    }, [minPrice, maxPrice]);


    const onChangeMinPrice: InputNumberProps['onChange'] = (newValue) => {
        setMinPriceValue(newValue as number);
    };

    const onChangeMaxPrice: InputNumberProps['onChange'] = (newValue) => {
        setMaxPriceValue(newValue as number);
    };

    return (
        <div className='p-4'>
            <h1 className='text-xl font-light mb-4 mt-4'>Price range</h1>
            <IntegerStep minPrice={minPrice} maxPrice={maxPrice} onChange={onChangeMinPrice} inputValue={minPriceValue} />
            <h1 className='text-l font-light '>To</h1>
            <IntegerStep minPrice={minPrice} maxPrice={maxPrice} onChange={onChangeMaxPrice} inputValue={maxPriceValue} />

            <Button
                type="primary"
                onClick={() => {
                    dispatch(categorySlice.actions.setMinPrice(minPriceValue));
                    dispatch(categorySlice.actions.setMaxPrice(maxPriceValue));
                }}>
                Apply price filter
            </Button>

        </div>
    )

}
