import { Input } from 'antd';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
import type { HTMLAriaDataAttributes } from 'antd/es/_util/aria-data-attrs';
import { Select } from 'antd';
import useFetchCategories from '../hooks/useFetchCategories';
import mapCategoriesToOptions from '../hooks/mapCategoriesToOptions';
import { useEffect, useState } from 'react';
import useFetchSubcategories from '../hooks/useFetchSubcategories';
import mapSubcategoriesToOptions from '../hooks/mapSubcategoriesToOptions';
import useFetchProductTypes from '../hooks/useFetchProductType';
import mapProductTypesToOptions from '../hooks/mapProductTypesToOptions';

export type Option = {
    value: string;
    label: string;
    children?: Option[];
} & HTMLAriaDataAttributes;

const { TextArea } = Input;

const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
};

export default function NewPost() {
    const [currentCategoryId, setCurrentCategoryId] = useState<number | undefined>(undefined);
    const [currentSubcategoryId, setCurrentSubcategoryId] = useState<number | undefined>(undefined);
    const [currentProductTypeId, setCurrentProductTypeId] = useState<number | undefined>(undefined);

    const categories = useFetchCategories();
    const subcategories = useFetchSubcategories(currentCategoryId);
    const productTypes = useFetchProductTypes(currentSubcategoryId);

    const handleCategoryChange = (value: string) => {
        const id = Number(value);
        setCurrentCategoryId(id);
    };

    useEffect(() => {
        setCurrentSubcategoryId(undefined);
    }, [currentCategoryId]);

    useEffect(() => {
        setCurrentProductTypeId(undefined);
    }, [currentCategoryId, currentSubcategoryId]);


    return (
        <div className='text-black bg-white'>
            <h1>Title</h1>
            <Input placeholder="Title"></Input>
            <h1>Description</h1>
            <TextArea rows={4} />
            <div className='flex'>
                <h1>Price</h1>
                <InputNumber min={1} max={10} onChange={onChange} />
                <h1>Currency</h1>
                <Select
                    defaultValue="EUR"
                    style={{ width: 120 }}
                    options={[
                        { value: 'EUR', label: 'EUR' }
                    ]}
                />
            </div>

            {/* CATEGORY PICKER */}
            <div className="flex">
                <div>
                    <h1>Category</h1>
                    <Select
                        style={{ width: 120 }}
                        options={mapCategoriesToOptions(categories)}
                        value={currentCategoryId !== undefined ? String(currentCategoryId) : undefined}
                        onChange={handleCategoryChange}
                        placeholder="Select category"
                    />
                </div>

                <div>
                    <h1>Subcategory</h1>
                    {
                        currentCategoryId == undefined
                            ?
                            <Select disabled style={{ width: 120 }}/>
                            :
                            <Select
                                style={{ width: 120 }}
                                options={mapSubcategoriesToOptions(subcategories)}
                                value={currentSubcategoryId !== undefined ? String(currentSubcategoryId) : undefined}
                                onChange={(value) => setCurrentSubcategoryId(Number(value))}
                                placeholder="Select subcategory"

                            />
                    }

                </div>

                <div>
                    <h1>Product Type</h1>
                    {
                        currentSubcategoryId == undefined
                            ?
                            <Select disabled style={{ width: 120 }} />
                            :
                            <Select
                                style={{ width: 120 }}
                                options={mapProductTypesToOptions(productTypes)}
                                value={currentProductTypeId !== undefined ? String(currentProductTypeId) : undefined}
                                onChange={(value) => setCurrentProductTypeId(Number(value))}
                                placeholder="Select product types"

                            />
                    }
                </div>
            </div>
            <div>currentCategoryId : {currentCategoryId}</div>
            <div>currentSubcategoryId : {currentSubcategoryId}</div>
            <div>currentProductTypeId : {currentProductTypeId}</div>
        </div>
    )
}