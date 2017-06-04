import React from 'react';
import Comments from './Comments'

class BlogItem extends React.Component{
    constructor(){
        super();
        
        this.state = {
            comments: [
                {
                    commentid: 1,
                    blogid : 1,
                    comment:'nice'
                },
                {
                    commentid: 2,
                    blogid: 2,
                    comment: 'great'
                },
                {
                    commentid: 3,
                    blogid: 2,
                    comment: 'great game'
                },
                {
                    commentid: 4,
                    blogid: 3,
                    comment:'awesome series'
                },
                  {
                    commentid: 4,
                    blogid: 3,
                    comment:'Pengiun and Nygma are cool'
                }
            ]
        }
        
        this.addNewComment = this.addNewComment.bind(this);
    }
    
    addNewComment(commentid,blogid,comment){
        var arr = this.state;
        arr.comments.unshift({commentid: commentid, blogid: blogid, comment: comment});
        this.setState(arr);
    }
    
    render(){
        return(
            <div>
            {
               this.props.items.map(function(item,i){
                  return(
                        <div key={i} className='blog-items'>
                        <button onClick={()=>this.props.editHandler(i)} className="btn btn-primary btn-xs pull-right">Edit</button>
                            <h4>{item.title}  <span className="badge">{item.category}</span></h4>
                        
                            <p className="bg-info">{item.desc}</p>
                        <div><h6>Comments:</h6></div>
                        <Comments data ={this.state.comments} blogid={item.id} addNewCommentHandler = {this.addNewComment}/>
                        </div>
                        );
               },this)
            }
            </div>
        );
    }
}


export default BlogItem;