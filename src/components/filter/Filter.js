import React from 'react'
import Tag from './filterItem/Tag'
import "./Filter.scss";

const Filter = ({ isOpen, tags, onTagRemoveClick, onResetTagsClick }) => {
    return (
        <>
            {isOpen ? <div className='Filter-bg'>
                <div className='container'>
                    <div className='Filter shadow rounded'>
                        <div className="Filter-tags">
                            <ul>
                                {tags.map((tag) => <Tag skill={tag} onRemoveClick={() => { onTagRemoveClick(tag); }} />)}
                            </ul>
                        </div>
                        <div className='Filter-resetWrapper'>
                            <button onClick={onResetTagsClick}>Clear</button>
                        </div>
                    </div>
                </div></div> : ""}
        </>

    )
}

export default Filter