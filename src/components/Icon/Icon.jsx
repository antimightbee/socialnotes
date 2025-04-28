import React, { useEffect, useState } from 'react';

import { Add,Cake,Delete,Edit, ExitToApp,MailOutline,PriorityHigh,SettingsOutlined,Visibility, VisibilityOff} from '@mui/icons-material';
const Icon = ({ icon, onClick, fontSize='normal' }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        let ico = null;
        switch (icon) {
            case "warning":
                ico = <PriorityHigh  onClick={onClick} />
                break;
            case "settings":
                ico = <SettingsOutlined style={{ cursor: 'pointer' }}  onClick={onClick} />;
                break;
            case "birthday":
                ico = <Cake  onClick={onClick} />;
                break;
            case "eye_off":
                ico = <VisibilityOff fontSize='large'  onClick={onClick} />;
                break;
            case "eye":
                ico = <Visibility fontSize='large'  onClick={onClick} />;
                break;
            case "exit":
                ico = <ExitToApp fontSize='large'  onClick={onClick} />;
                break;
            case "delete":
                ico = <Delete style={{ cursor: "pointer" }}  onClick={onClick} />;
                break;
            case "add":
                ico = <Add  style={{ cursor: "pointer" }} fontSize='large' onClick={onClick} />;
                break;
            case "edit":
                ico = <Edit style={{ cursor: "pointer" }}  onClick={onClick} />;
                break;
            case "email":
                ico = <MailOutline  onClick={onClick} />;
                break;
            default:
                ico = null;
        }
        setState(ico);
    }, [icon, onClick]);

    return <>{state}</>;
};

export default Icon;
