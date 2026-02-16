import type { PostDetails } from "../../../types/PostDetails"
import useFetchBrand from "../../../hooks/postDetails/useFetchBrand";
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

export default function Info({ postDetails }: { postDetails: PostDetails | undefined }) {
    const product = postDetails?.product;
    const productName = product?.name;
    const brandId = product?.brandId;
    const brandName = useFetchBrand(brandId)?.name;

    const items: DescriptionsProps['items'] = [
        {
            label: 'Product',
            children: productName,
            span: 'filled'
        },
        {
            label: 'Brand',
            children: brandName,
            span: 'filled'
        },

    ];


    return (
        <div className="bg-white text-black my-3 py-4">
            <h1 className="ml-4">Product information</h1>
            <div className="p-4">
                <Descriptions bordered items={items} />
            </div>
        </div>
    )
}