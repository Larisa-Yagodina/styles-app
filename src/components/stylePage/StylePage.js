import React from 'react';
// import {ImageGallery} from "./ImageGallery";
import ImageBlock from "./ImageBlock";

const StylePage = ({stylePageItem}) => {


    if (!stylePageItem) {
        return (
            <div>Content will be soon</div>
        )
    }

    return (
        <div className='pageBox'>
            <h2>{stylePageItem.title}</h2>

            {stylePageItem.blocks.map(block => {
                if (block.type === 'paragraph') {
                    return (
                        <div>
                            {block.content.map(el => <p> {el} </p>)}
                        </div>
                    )
                }
                if (block.type === 'list') {
                    return (
                        <div>
                            {block.content.map(el => <li> {el} </li>)}
                        </div>
                    )
                }
                if (block.type === 'photo') {
                    return (
                        <div>
                            {/*<ImageGallery/>*/}
                            <ImageBlock block={block}/>
                        </div>
                    )
                }
                return null
            })}

        </div>
    );
};

export default StylePage;
