import '../css/notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Notification = ({ text = 'Notification message', success = false, warning = false, error = false }) => {
    const [displayNotification, setDisplayNotification] = useState(true)
    const dismissNotification = () => {
        setDisplayNotification(false)
    }
    
    const setNotificationStyle = () => {
        if (success) return 'success';
        if (warning) return 'warning';
        if (error) return 'error';
        return 'success'
    }

    return (
        <>
            <div style={(!displayNotification)? {display: 'none'}:{}} className={`notification-container ${setNotificationStyle()}`}>
                <div className='notification'>
                    <div className='notification-text'>
                        <p>{text}</p>
                    </div>
                    <div className='notification-close'>
                        <FontAwesomeIcon icon={faTimes}
                            onClick={dismissNotification}
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Notification;