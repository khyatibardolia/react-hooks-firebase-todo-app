import React, {createContext} from 'react';
import FB from '../services/firebase/index.js';

export const FirebaseContext = createContext();

export const FirebaseContextProvider = props => {
    return (
        <FirebaseContext.Provider value={FB}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
