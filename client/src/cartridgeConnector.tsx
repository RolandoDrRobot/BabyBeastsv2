import ControllerConnector from "@cartridge/connector";
import { Connector } from "@starknet-react/core";

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  policies: [
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "spawn",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "decrease_stats",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "feed",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "sleep",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "awake",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "play",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "clean",
    },
    {
      target: '0x06171ed98331e849d6084bf2b3e3186a7ddf35574dd68cab4691053ee8ab69d7',
      method: "revive",
    },
  ],
  rpc: "https://api.cartridge.gg/x/babybeast-slot/katana",
}) as never as Connector;

export default cartridgeConnector;
