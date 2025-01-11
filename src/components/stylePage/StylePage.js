import React from 'react';
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
                if (block.type === 'title') {
                    return (
                        <div>
                            <h2>{block.title}</h2>
                        </div>
                    )
                }
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
                        <div className='photo-block'>
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
