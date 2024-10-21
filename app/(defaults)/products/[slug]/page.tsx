import React from 'react';
import type { searchParams } from '@/app/types/common';
import Product from '@/components/pages/product/Product';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <Product id={id} mode={modeValue} />
        </div>
    );
};

export default page;
