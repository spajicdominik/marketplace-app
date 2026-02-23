import React from 'react';
import { Carousel } from 'antd';
import useFetchPostImages from '../../../../hooks/postDetails/useFetchPostImages';
import ImageComponent from './components/ImageComponent';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export interface PostDetailsImages {
    id: string,
    url: string,
    postId: string,
    isMain: string,
    isActive: string
}

export default function Images({postId} : {postId : number}) {
    const images = useFetchPostImages(postId);
    return (
        <div className='bg-neutral-900'>
            <Carousel arrows infinite={false}>
                {images?.map((image) => <ImageComponent url={image.url}/>)}
            </Carousel>
        </div>
    )
};