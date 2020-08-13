import { AsyncStorage } from 'react-native'
import axios from 'axios';

function login(email, password){
  return axios.post('http://localhost:3000/login', {
    'email': email,
    'password': password,
  }).then((res) => {
    if(res.error){
      console.log(res.error);
    } else {
      AsyncStorage.setItem('jwt', res.token);
    }
  }).catch((err) => {
    console.log(err);
  });
}

function signup(data){
  axios.post('http://localhost:3000/signup', {
    'firstname': profile.firstname,
    'lastname': profile.lastname,
    'email': profile.email,
    'password': profile.password
  }, {withCredentials: true}).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  }).then(() => {
    navigation.navigate('Home');
  });
}

function logout(){
  AsyncStorage.removeItem('jwt');
}

//use is not necessarily authenticated, but has a token
//that will be validated on request
function isAuthenticated(){
  return AsyncStorage.getItem('jwt') != null;
}

export default {};
