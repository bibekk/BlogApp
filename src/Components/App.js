import React from 'react';
import Blog from './Blog';
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            blogLists:
                    [
                        {
                            id: 1,
                            title: 'React is leading Angular',
                            desc :'So, far I am loving React more than Angular.',
                            category: 'IT'
                        },
                        {
                            id: 2,
                            title: 'Upcoming PS4 games',
                            desc: 'Horizon 0 Dawn is pretty awesome game that they released this year.Next year Red Dead Redemption 2 is coming.',
                            category: 'Gaming'
                        },
                        {
                            id: 3,
                            title:'Gotham Series Rocks',
                            desc:"Temple Shaman takes Bruce to the next phase of his training; Gordon and Bullock discover a crystal owl that carries the biggest secrets of Gotham's underworld; Nygma and Penguin must work together to get out of a tricky situation 'Don't call me Ed'",
                            category: 'TV'
                        }
                    ],
               showNewForm: false,
               showEditForm: false,
               editBlogIndex : null,
                }
        this.showNewBlogInput = this.showNewBlogInput.bind(this);
        this.addNewBlog = this.addNewBlog.bind(this);
        this.cancelNewForm = this.cancelNewForm.bind(this);
        this.cancelEditForm = this.cancelEditForm.bind(this);
        this.editBlog = this.editBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
      
    }
    
    showNewBlogInput(){
        var arr = this.state;
        arr.showNewForm = true;
        this.setState(arr);
        
    }
    
    addNewBlog(id,title,desc,cat){
        var arr = this.state;
        arr.blogLists.unshift({id: id, title: title, desc : desc,category: cat});
        arr.showNewForm = false;
        this.setState(arr);
    }
    
    editBlog(i){ 
        var arr = this.state;
        arr.showEditForm = true;
        arr.editBlogIndex = i;
        this.setState(arr);
    }
    
    updateBlog(id,title,desc,cat){
        var arr = this.state;
        arr.blogLists[id].title = title;
        arr.blogLists[id].desc = desc ;
        arr.blogLists[id].category =cat;
        arr.showEditForm = false;
        this.setState(arr);
    }
    
    cancelNewForm(){
        var arr = this.state;
        arr.showNewForm = false;
        this.setState(arr);
    }
    
    cancelEditForm(){
        var arr = this.state;
        arr.showEditForm = false;
        this.setState(arr);
    }
    

    render(){
        return(
            <div className="panel">
                <h2>Awesome Blog</h2>
                   <button onClick={this.showNewBlogInput} className="btn btn-primary btn-sm">+ Add New Blog</button>
                {/* Add New Blog Form */}
                <AddBlog toggleForm={this.state.showNewForm} addNewBlogHandler ={this.addNewBlog} latestID={this.state.blogLists.length +1} cancelNewFormHandler={this.cancelNewForm} /> 
                {/* Edit Blog Form */}
                 <EditBlog toggleForm={this.state.showEditForm} updateBlogHandler ={this.updateBlog} editBlogData={this.state.blogLists[ this.state.editBlogIndex]} id={this.state.editBlogIndex} cancelEditFormHandler={this.cancelEditForm} /> 

                {/*Blog items */}
                <Blog items={this.state.blogLists} editHandler = {this.editBlog}/>
               
         
            </div>
        );
    }
}

export default App;