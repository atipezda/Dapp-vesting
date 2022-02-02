import React from "react";

interface MetaMaskContext {
    isActive: boolean,
    account: string | null | undefined,
    isLoading: boolean,
    connect: () => Promise<void>,
    disconnect: () => Promise<void>,
    shouldDisable: boolean
}

const initialValues = {
    isActive: false,
    account: undefined,
    isLoading: true,
    shouldDisable: false,
    connect: async () => {},
    disconnect: async () => {},
}


export const MetaMaskContext = React.createContext<MetaMaskContext>(initialValues);
