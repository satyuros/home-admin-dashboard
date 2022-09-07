import React, { useCallback } from "react";
import { FiChrome } from "react-icons/fi";
import { MdCastConnected } from "react-icons/md";
import useCast from "./useCast";

const CastButton = () => {
  const cast = useCast({
    initialize_media_player: "DEFAULT_MEDIA_RECEIVER_APP_ID",
    auto_initialize: true,
  });
  const handleClick = useCallback(async () => {
    //alert("D_D");
    console.log(cast.castReceiver);
    if (cast.castReceiver) {
      await cast.handleConnection().catch((error) => {
        if (error.code === "cancel") {
          console.log("cancelled");
        } else {
          console.error("handle conn error", error);
        }
      });
    }
  }, [cast.castReceiver, cast.handleConnection]);
  return (
    <button onClick={handleClick}>
      {cast.castReceiver ? "not null" : "null"} |
      {cast.isConnect ? "isConnect" : "is NOT Connect"}
      <MdCastConnected size={40} />
    </button>
  );
};

export default CastButton;
