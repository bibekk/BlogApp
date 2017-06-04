import React from 'react';
import BlogItem from './BlogItem'

class Blog extends React.Component{
    constructor(){
        super();
        this.editBlog = this.editBlog.bind(this);
        
    }
    
    editBlog(i){
        this.props.editHandler(i)
    }
    
    render(){
        return(
            <div className='blog-items-parent'>
                <BlogItem items={this.props.items} editHandler={this.editBlog} />
            </div>
        );
    }
}


export default Blog;