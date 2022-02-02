import {MetaMaskInpageProvider} from "@metamask/providers";
import {Wallet} from "../helpers/Wallet";

declare global {
    interface Window {
        ethereum: MetaMaskInpageProvider;
    }
}
