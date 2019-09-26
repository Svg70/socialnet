import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {
        
    
  let postArraySecond = props.posts.map(p => <Post message={p.postMess} likeCount={p.postLike} />);
  let newPostElement = React.createRef();
  
  let onAddPost = () => {  
        props.addPost();
  }
  let onPostChange =()=>{
        let text=newPostElement.current.value;
        props.updateNewPostText(text);
}
   return (
        <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick = {onAddPost}>Post</button>
        {postArraySecond}
        </div>
    );
}

export default MyPosts