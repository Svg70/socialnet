import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../../src/assets/img/man.png'

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}|</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
// import React from 'react';
// import * as axios from 'axios'
// import userPhoto from '../../../src/assets/img/man.png'
// import s from './Users.module.css'
// let Users = (props) => {
    
        
            
//         return (<div>
            
//                 {props.pages.map( p=>{
//                     return <span className={props.currentPage ===  p && s.selectedPage} 
//                     onClick={(e)=> {props.onPageChanged(p)}}>{p}</span>
//                 })}
                
                
            
//             {/* <button onClick={getUsers}>Get Users</button> */}
//             {props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small != null ? u.photos.small : userPhoto} />
//                     </div>
//                     {u.followed
//                         ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
//                         : <button onClick={() => { props.follow(u.id) }}>unfollow</button>
//                     }


//                 </span>
//                 <span>
//                     <div>{u.name}</div>
//                     <div>{u.status}</div>
//                 </span>

//                 <span>
//                     <div>{"u.location.country"}</div>
//                     <div>{"u.location.city"}</div>
//                 </span>
//             </div>
//             )}
//         </div>)
    
// }
// export default Users;