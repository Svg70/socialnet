import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from './Content.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Content = (props) => {
  
  return (<div className={s.content}>
    <ProfileInfo/>
    <MyPostsContainer store={props.store}/>
    {/* b={props.a.posts} dispatch={props.dispatch}  c={props.a.newPostText} */}
  </div>);
}


export default Content;
