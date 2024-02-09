"use client";

import React, { createContext, useState } from 'react';

// Create the context
export const BiodataContext = createContext();

// Create the provider component
export const BiodataProvider = ({ children }) => {
    // Define the state variables
    const [data, setData] = useState(null);
    
    // Define any other functions or state variables here

    // Return the context provider
    return (
        <BiodataContext.Provider value={{ data, setData }}>
            {children}
        </BiodataContext.Provider>
    );
};
