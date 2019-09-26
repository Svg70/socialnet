import React from 'react';

import s from'./Friends.module.css'
import Friend from './Friend/Friend';
const Friends = ()=> {
return(<div className={s.content}>

<div>
   <img src='https://i.ytimg.com/vi/ywxVN5u2FwY/hqdefault.jpg'
  className={s.ava}></img>
</div>
<Friend friendName='Миша Компотик'country='Russia'/>
<div>
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Silvio_Berlusconi_in_2015.jpeg/250px-Silvio_Berlusconi_in_2015.jpeg'
  className={s.ava}></img>
</div>
<Friend friendName='Сильвио' country='Italy'/>
</div>
);
}

export default Friends