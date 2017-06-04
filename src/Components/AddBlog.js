import React from 'react';

class AddBlog extends React.Component{
    constructor(){
        super();
        this.addBlog = this.addBlog.bind(this);
    }
    
    addBlog(){
        this.props.addNewBlogHandler(this.props.latestID,this.refs.blogTitle.value,this.refs.blogDesc.value,this.refs.category.value);   
    }
    
    render(){
        if(this.props.toggleForm){
            return(
                <div className="panel">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" ref="blogTitle" placeholder="Title"/>
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" ref="blogDesc" placeholder="Blog contents"></textarea>
                    </div>
                    
                    <div className="form-group">
                       <select ref="category" className="form-control">
                            <option>IT</option>
                            <option>Fashion</option>
                            <option>Gaming</option>
                            <option>TV</option>
                       </select>
                    </div>
                    <button onClick={this.addBlog} className="btn btn-info btn-xs">Add</button>&nbsp;
                    <button onClick={this.props.cancelNewFormHandler} className="btn btn-danger btn-xs">Cancel</button>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default AddBlog;