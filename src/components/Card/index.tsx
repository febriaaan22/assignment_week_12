import { Card as CardComponents } from 'antd';
import { ReactNode } from 'react';

interface Props {
    title?: string;
    children: ReactNode;
}

const Card = ({ title, children }: Props) => {
    return (
        <>
            <CardComponents title={title} bordered={true} style={{ width: 1000, height: 700 }}>
                {children}
            </CardComponents>
        </>
    )
};

export default Card;