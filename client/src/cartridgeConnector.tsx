import ControllerConnector from "@cartridge/connector";
import { Connector } from "@starknet-react/core";

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  rpc: "https://api.cartridge.gg/x/babybeast-slot/katana",
}) as never as Connector;

export default cartridgeConnector;
