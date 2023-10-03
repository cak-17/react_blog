import React from 'react';

// MUI ICONS
import {
    AccountCircle,
    StarBorderOutlined,
    StarBorderPurple500TwoTone,
} from '@mui/icons-material';

// FA ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const iconLibrary = {
    MUI: {
        user: {
            default: <AccountCircle />,
            superuser: <StarBorderPurple500TwoTone />,
            staff: <StarBorderOutlined />,
        },
    },
    FA: {
        user: {
            default: <FontAwesomeIcon icon={faUser} />,
        },
    },
};

export const getUserIcon = (user, variant = 'MUI') => {
    const lib = iconLibrary[variant].user;
    let userIcon = lib.default;

    if (user.is_superuser) {
        userIcon = lib.superuser;
    } else if (user.is_staff) {
        userIcon = lib.staff;
    }
    return userIcon;
};

export default iconLibrary;
