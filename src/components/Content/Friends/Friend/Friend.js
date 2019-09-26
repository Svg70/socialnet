import React from 'react';
import s from'./Friend.module.css'
const Friend = (props)=> {
    
return (<div className={s.item}>

<div>{props.friendName}</div>

<div>country of living: {props.country}
</div>
<button>Like</button>
</div>
);
}

export default Friend