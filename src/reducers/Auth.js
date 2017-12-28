const defaultUserInfo = {
  name: 'Admin',
  image: 'https://dummyimage.com/100x100/ffffff/555555.png&text=A'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}
