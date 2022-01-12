import {createContext, useContext, useReducer} from 'react';

export const DataLayer = createContext();

export const DataLayerProvider = ({initialState, reducer, ...props}) => {
    return (
        <DataLayer.Provider value={useReducer(reducer, initialState)}>
            {props.children}
        </DataLayer.Provider>
    );
}

export const useDataLayerValue = () => useContext(DataLayer);
