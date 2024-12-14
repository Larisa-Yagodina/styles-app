import React from 'react';

const ImageBlock = ({block}) => {


    return (
        <div className='imageWrapper'>
            {block.content.map(el => <img src={el} alt="style image" />)}
        </div>
    );
};

export default ImageBlock;
