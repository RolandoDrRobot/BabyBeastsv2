import ControllerConnector from "@cartridge/connector";
import { Policy } from "@cartridge/controller";
import { Connector } from "@starknet-react/core";

const policies: Policy[] = [
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "spawn",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "decrease_stats",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "feed",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "sleep",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "awake",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "play",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "clean",
  },
  {
    target: '0x7a1c71029f2d0b38e3ac89b09931d08b6e48417e079c289ff19a8698d0cba33',
    method: "revive",
  },
]

// Configuración básica del conector
const cartridgeConnector = new ControllerConnector({
  policies,
  rpc: "https://api.cartridge.gg/x/bt/katana",
}) as never as Connector;

export default cartridgeConnector;
