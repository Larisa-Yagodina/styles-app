import React from 'react';

const ImageBlock = ({block}) => {


    return (
        <div className='imageWrapper'>
            {block.content.map(el => (<img src={el} alt='styles'/>))}
        </div>
    );
};

export default ImageBlock;
