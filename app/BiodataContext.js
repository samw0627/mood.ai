"use client";

import React, { createContext, useState } from 'react';

// Create the context
export const BiodataContext = createContext();

// Create the provider component
export const BiodataProvider = ({ children }) => {
    // Define the state variables
    const [heartrate, setHeartrate] = useState(null);
    const [temperature, setTemperature] = useState(null);
    // Define any other functions or state variables here

    // Return the context provider
    return (
        <BiodataContext.Provider value={{ heartrate, temperature, setHeartrate, setTemperature }}>
            {children}
        </BiodataContext.Provider>
    );
};
