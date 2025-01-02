import { createDojoConfig } from "@dojoengine/core";

import manifest from "./src/manifest_dev.json";

export const dojoConfig = createDojoConfig({
    manifest,
    masterAddress: '0x69d851871b6ffc967ed920d6e881a307d10d664bf317ab2c0872fddc3a87144',
    masterPrivateKey: '0x4885f37c4a0cce10d16ef749053fd74d83913eb222c2d237fecd93e231bc039',
    rpcUrl: 'https://api.cartridge.gg/x/bt/katana',
    toriiUrl: 'https://api.cartridge.gg/x/bt/torii',
});
