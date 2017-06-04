import React from 'react';

class Comments extends React.Component{
    constructor(){
        super();
        this.addNewComment = this.addNewComment.bind(this);
    }
    
  addNewComment(){
    this.props.addNewCommentHandler(this.props.data.length,this.props.blogid,this.refs.comment.value);
      this.refs.comment.value ='';
    }

    
    render(){
        return(
            <div>
                <ul className='blog-comments'>
                    {
                        this.props.data.map(function(item,i){
                           if(this.props.blogid === item.blogid){
                            return(
                                    <li key={i}>{item.comment}</li>
                                  );
                            }else{
                                return null;
                            }
                        },this)
                    }
                </ul>
                <div>
                    <div className="form-group">
                        <textarea className="form-control" ref="comment" placeholder="Your comments here"></textarea>
                    </div>
                    <button onClick={this.addNewComment} className="btn btn-info btn-xs">Add Comment</button>
                </div>
            </div>
        );
    }
}

export default Comments;