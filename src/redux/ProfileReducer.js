const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialstate= {posts: [
    { id: 1, postMess: 'Привет? ', postLike: '33' },
    { id: 2, postMess: 'Пока', postLike: '22' },
    { id: 3, postMess: 'иввиыв', postLike: '11' },
    { id: 4, postMess: 'Привет', postLike: '33' },
    { id: 5, postMess: 'Пока', postLike: '22' },
    { id: 6, postMess: 'Там вдали за рекой', postLike: '11' },
  ],
  newPostText: 'write your post'
};

const profileReducer = (state=initialstate,action) =>{
  switch(action.type){
    case ADD_POST:{
            let newPost = {
                id: 7,
                postMess: state.newPostText,
                postLike: 665
              };
              let newState = {...state};
              newState.posts = [...state.posts];
              newState.posts.unshift(newPost);
              newState.newPostText=''
              return newState;}
            
    case UPDATE_NEW_POST_TEXT:{

      let newState = {...state};
      newState.posts = [...state.posts];
      newState.newPostText = action.newText;
      return newState;
    }      
            default:
       return state;
    

  }
}
    
export let addPostActionCreator=()=>{
    return{
      type: ADD_POST
    }
  }
  export let updateNewPostTextActionCreator=(text)=>{
    return{
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
  }

export default profileReducer