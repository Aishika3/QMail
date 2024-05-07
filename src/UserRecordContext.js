import React, { createContext, useState } from 'react';

export const UserRecordContext = createContext();

export const UserRecordProvider = (props) => {
    const [userRecord, setUserRecord] = useState(null);

    return (
        <UserRecordContext.Provider value={[userRecord, setUserRecord]}>
            {props.children}
        </UserRecordContext.Provider>
    )
}
