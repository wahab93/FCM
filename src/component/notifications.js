import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { requestforToken, onMessageListner } from '../firebase'

const Notifications = () => {
    const [notification, setNotification] = useState({ title: '', body: '' })
    requestforToken();
    

    const notify = () => toast(<ToastDisplay />)
    const ToastDisplay = () => {
        return (
            <>
                <div>{notification?.title}</div>
                <div>{notification?.body}</div>
            </>
        )
    }

    const handleDefaultNotification = () => {
        toast.success('This is a default toast notification');
    };

    useEffect(() => {
        if (notification?.title) {
            notify()
        }
        console.log('notification title in useefeect:', notification?.title)
    }, [notification])


    onMessageListner()
        .then((payload) => {
            console.log('in notification.js payload onmessagelistner', payload);
            setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
        })
        .catch((err) => {
            console.log('onMessageListner notification failed', err);
        });


    return (
        <>
            <button onClick={handleDefaultNotification}>Show Default Toast</button>
            <Toaster />
        </>
    )
}

export default Notifications