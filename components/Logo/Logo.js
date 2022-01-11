import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
    return (
        <div className="p-4 bg-danger rounded-3 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="fs-1" color="white" icon={faCommentDots} />
        </div>
    );
};

export default Logo;