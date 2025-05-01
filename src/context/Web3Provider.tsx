"use client"

import * as React from "react"
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import "@rainbow-me/rainbowkit/styles.css"

const config = getDefaultConfig({
  appName: "IPX",
  projectId: "YOUR_PROJECT_ID", 
  chains: [mainnet, sepolia],
  ssr: true,
})

const queryClient = new QueryClient()

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}