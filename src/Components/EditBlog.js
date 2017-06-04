import React from 'react';

class EditBlog extends React.Component{
    constructor(){
        super();
        this.updateBlog = this.updateBlog.bind(this);
    }
    
    updateBlog(){
        this.props.updateBlogHandler(this.props.id,this.refs.blogTitle.value,this.refs.blogDesc.value,this.refs.category.value);   
    }
    
    render(){
        if(this.props.toggleForm){
            return(
                <div className="panel">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input autoFocus type="text" className="form-control" ref="blogTitle" placeholder="Title" defaultValue={this.props.editBlogData.title} />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" ref="blogDesc" placeholder="Blog contents" defaultValue = {this.props.editBlogData.desc}></textarea>
                    </div>
                    
                    <div className="form-group">
                       <select ref="category" className="form-control" defaultValue={this.props.editBlogData.category}>
                            <option>IT</option>
                            <option>Fashion</option>
                            <option>Gaming</option>
                            <option>TV</option>
                       </select>
                    </div>
                    <button onClick={this.updateBlog} className="btn btn-info btn-xs">Update</button>&nbsp;
                    <button onClick={this.props.cancelEditFormHandler} className="btn btn-danger btn-xs">Cancel</button>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default EditBlog;