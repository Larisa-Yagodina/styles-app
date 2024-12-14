import React from 'react';
import ImageBlock from "./ImageBlock";

const StylePage = ({stylePageItem}) => {


    return (
        <div>
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
                        <ImageBlock block={block} />
                    )
                }
                return null
            })}

        </div>
    );
};

export default StylePage;
