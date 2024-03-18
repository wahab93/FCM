import { initializeApp } from 'firebase/app'
import { getMessaging, onMessage, getToken } from 'firebase/messaging'


const firebaseConfig = {
    apiKey: 'AIzaSyD3G3Uf4bB33aafeAIZIMFpuPyibh_TuOg',
    authDomain: 'abcd-cdd58.firebaseapp.com',
    projectId: 'abcd-cdd58',
    storageBucket: 'abcd-cdd58.appspot.com',
    messagingSenderId: '221957971541',
    appId: '1:221957971541:web:9f3472adff80fce9533edc',
    measurementId: 'G-58MPMWND72',
};

initializeApp(firebaseConfig)

const messaging = getMessaging()

export const requestforToken = () => {
    return getToken(messaging, { vapidKey: 'BDMoNrfkyHdYhe5J-bXIfXaD7QeyNGH-wR5tB1IFzG29-NwO9fiI-NZdBZF8sQZACrjIWT0iv7jb0yu78k_7TUg' })
        .then(currentToken => {
            if (currentToken) {
                console.log('token client agya:',currentToken)
            } else {
                console.log('no register token avalible')
            }
        })
        .catch(err => console.log('Error while regiter token', err))
}


export const onMessageListner = () => {
    return new Promise((resolve)=>{
        onMessage(messaging, (payload)=>{
            console.log('onMessage Payload' , payload)
            resolve(payload)
        })
    })
}


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/messaging';

// const firebaseConfig = {
//   apiKey: 'AIzaSyD3G3Uf4bB33aafeAIZIMFpuPyibh_TuOg',
//   authDomain: 'abcd-cdd58.firebaseapp.com',
//   projectId: 'abcd-cdd58',
//   storageBucket: 'abcd-cdd58.appspot.com',
//   messagingSenderId: '221957971541',
//   appId: '1:221957971541:web:9f3472adff80fce9533edc',
//   measurementId: 'G-58MPMWND72',
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// export { messaging };
