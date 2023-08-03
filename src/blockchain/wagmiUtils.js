import React from 'react'
import { useAccount } from 'wagmi'
import { useConnectModal, connectorsForWallets, darkTheme, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

const { chains, publicClient } = configureChains(
    [polygon, polygonMumbai],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);

const connectors = connectorsForWallets([
    {
        groupName: "Popular",
        wallets: [
            metaMaskWallet({ projectId: "abc", chains }),
        ],
    },
]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

const WagmiUtils = ({compo}) => {

    const { address, isConnected } = useAccount({
        onConnect: ({ address, isReconnected, connector }) => {
            // if (!isReconnected) {
            //   alert(address)
            // }
        },
        onDisconnect: () => {
            // alert("We are disconnected")
        }
    })
    const { openConnectModal } = useConnectModal();

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider
                    modalSize="compact"
                    theme={darkTheme({
                        accentColor: "#394bf2",
                        accentColorForeground: "white",
                        borderRadius: "medium",
                        fontStack: "rounded",
                        overlayBlur: "small",
                    })}
                    chains={chains}
                >
                   {compo}
                </RainbowKitProvider>
            </WagmiConfig>
               
        </>
    )
}

export default WagmiUtils