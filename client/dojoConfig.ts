import { createDojoConfig } from "@dojoengine/core";

import manifest from "./src/manifest_dev.json";

export const dojoConfig = createDojoConfig({
    manifest,
    masterAddress: '0x6319af1a5ff49a7b68e83981897a6648200145f676a9fe9b10aa8df6543a3d5',
    masterPrivateKey: '0x4da52dfcdbd57c9853c33df71aa1c57d366435f41e803191f2139ec9759fc1a',
    rpcUrl: 'https://api.cartridge.gg/x/babybeast-slot/katana',
    toriiUrl: 'https://api.cartridge.gg/x/babybeast-slot/torii',
});
