import React from 'react';
import s from'./Post.module.css'

const Post = (props)=> {
    
return (<div>
<div className={s.postAva}>
    <img  src='https://delai-vibor.com/wp-content/uploads/2017/12/pilot.jpg'></img>
{ props.message }
</div>

<div className={s.item}>Иван Михалыч</div>
{ props.likeCount }
</div>
);
}

export default Post