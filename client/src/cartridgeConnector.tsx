import ControllerConnector from "@cartridge/connector";
import { Policy } from "@cartridge/controller";
import { Connector } from "@starknet-react/core";

const policies: Policy[] = [
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "spawn",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "decrease_stats",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "feed",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "sleep",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "awake",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "play",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "clean",
  },
  {
    target: '0x17e18f79cb18f179e97c785b63f99c98c1d66a10b0c515365743602127148ec',
    method: "revive",
  },
]

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  policies,
  rpc: "https://api.cartridge.gg/x/bt/katana",
}) as never as Connector;

export default cartridgeConnector;
