import { useConnect, useAccount } from "@starknet-react/core";
import dojo from '../../img/dojo-icon.svg'
import React, { SetStateAction } from "react";

interface ControllerProps {
  setAddress: React.Dispatch<SetStateAction<string>>;
}

const ControllerConnectButton = ({ setAddress }:ControllerProps) => {
  const { connect, connectors } = useConnect();
  const { address, status } = useAccount();

  return (
    <div>
      {connectors.map((connector) => (
        status === "connected" ? (
          <button
            key={connector.id}
            className="connect-btn"
          >
            Account ...{address?.slice(-6)}
          </button>
        ) : (
          <button
            key={connector.id}
            onClick={() => {
              connect({ connector });
              address && setAddress(address);
            }}
            className="connect-btn"
          >
            Connect
            <img src={dojo} alt="starknet" />
          </button>
        )
      ))}
    </div>
  );
};

export default ControllerConnectButton;
