import React, { useState } from 'react'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = 
    ({ 
        width, 
        height, 
        children,
        variant,
        onClick 
    }) => {

    const [state, setstate] = useState(0);
    return (
        <div style={{width, height, 
                border: variant === CardVariant.outlined ? '1px solid grey' : 'none', 
                background: variant === CardVariant.primary ? 'lightgrey' : ''
            }}
            onClick={() => onClick(state)}
        >
            { children }
        </div>
    )
}

export default Card
