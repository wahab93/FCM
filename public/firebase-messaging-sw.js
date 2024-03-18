importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


const firebaseConfig = {
    apiKey: 'AIzaSyD3G3Uf4bB33aafeAIZIMFpuPyibh_TuOg',
    authDomain: 'abcd-cdd58.firebaseapp.com',
    projectId: 'abcd-cdd58',
    storageBucket: 'abcd-cdd58.appspot.com',
    messagingSenderId: '221957971541',
    appId: '1:221957971541:web:9f3472adff80fce9533edc',
    measurementId: 'G-58MPMWND72',
};


firebase.initializeApp(firebaseConfig);

const messaging= firebase.messaging();

messaging.onBackgroundMessage(function (payload){
    console.log('Received Background Messsage', payload)

    const notificationTitle = payload.notification.title
    const notificationOption = {
        body : payload?.notification?.body
    }

    self.registeration.showNotification(notificationTitle, notificationOption)
})