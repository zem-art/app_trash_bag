const defaultstate = {
  login: false,
  user: '',
  role: '',
  name: '',
  email: '',
  image: '',
  id: '',
};

const userData = (state = defaultstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, login: true, user: action.payload};
    case 'USER_ROLE':
      return {...state, login: true, role: action.payload};
    case 'NAME_USER':
      return {...state, login: true, name: action.payload};
    case 'EMAIL_USER':
      return {...state, login: true, email: action.payload};
    case 'IMAGE_USER':
      return {...state, login: true, image: action.payload};
    case 'ID':
      return {...state, login: true, id: action.payload};
    default:
      return state;
  }
};

export default userData;
