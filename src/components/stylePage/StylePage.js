import React from 'react';
import ImageBlock from "./ImageBlock";


const StylePage = ({stylePageItem}) => {



    if (!stylePageItem) {
        return (
            <div>Content will be soon</div>
        )
    }

    return (
        <div>
            <h2>{stylePageItem.title}</h2>

            {stylePageItem.blocks.map(block => {
                if (block.type === 'title') {
                    return (
                        <div className='textContent'>
                            <h2>{block.title}</h2>
                        </div>
                    )
                }
                if (block.type === 'paragraph') {
                    return (
                        <div className='textContent'>
                            {block.content.map(el => <p> {el} </p>)}
                        </div>
                    )
                }
                if (block.type === 'list') {
                    return (
                        <div className='textContent'>
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
                if (block.type === 'links') {
                    return (
                        <div>
                            <h3>{block.title}</h3>
                            {block.content.map(el =>
                                <div>
                                <a
                                    href={el.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > {el.name} </a>
                                </div>
                            )}
                        </div>
                    )
                }
                return null
            })}

        </div>
    );
};

export default StylePage;
