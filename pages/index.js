import { useState } from "react";
import Button from "../components/Button";
import dynamic from "next/dynamic";

const RemoteButton = dynamic(() => import("remote/Button"), {
  ssr: false,
});

export default function Home() {
  const [isRemoteVisible, setIsRemoteVisible] = useState(false);

  return (
    <div className="max-w-xl">
      <div className="p-4 flex flex-col gap-2">
        <h1 className="font-bold">Host:</h1>
        <Button />

        <h1 className="font-bold">Client:</h1>
        {!isRemoteVisible && (
          <button
            type="button"
            className="p-1 bg-red-400 text-white max-w-xs cursor-pointer"
            onClick={() => setIsRemoteVisible(true)}
          >
            show remote
          </button>
        )}

        {isRemoteVisible && (
          <>
            <RemoteButton />
          </>
        )}
      </div>
    </div>
  );
}
