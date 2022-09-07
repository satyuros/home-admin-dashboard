import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import React, { useContext } from "react";
import { useEffect } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GrCirclePlay } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { CastButton, Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { contextMenuItems, gridOrderImage } from "../data/dummy";
import { Files } from "../data/files";
import product6 from "../data/product6.jpg";
//import { useCast, useMedia } from "./components/GoogleCast";
import { useCallback } from "react";

const mediaSrc =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

const FolderDetail = () => {
  // const { castReceiver, castSender, setSession, session } =
  //   useContext(castContext);
  const { currentColor } = useStateContext();
  const { folderId } = useParams();
  // const cast = useCast({
  //   initialize_media_player: "DEFAULT_MEDIA_RECEIVER_APP_ID",
  //   auto_initialize: false,
  // });
  //const media = useMedia();
  // const playVideo = async () => {
  //   console.log(mediaSrc);
  //   if (media) {
  //     await media
  //       .playMedia(mediaSrc, true)
  //       .catch((error) => console.error("Error casting video", error));
  //   }
  // };

  const onClickplayButton = useCallback(() => {});
  // if (!cast.isConnect) {
  //   console.log("Cast is not connected");
  //   console.log(cast.castReceiver);
  //   cast.initializeCast("DEFAULT_MEDIA_RECEIVER_APP_ID");
  //   return;
  // }

  //   //console.log(id);
  //   playVideo();
  // }, [cast]);

  var files = Files.files.slice(19);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* {isLoading && <ReactLoading type="bars" />} */}
      <Header category="Page" title="DLNA Folders" />
      {<CastButton />}
      <br></br>
      {/* {session ? "not null" : "null"} |
      {cast.isConnect ? "isConnect" : "is NOT Connect"} */}
      <GridComponent
        id="gridcomp"
        dataSource={files}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          <ColumnDirective
            key="productImage"
            field="productImage"
            headerText="Image"
            width="100"
            textAlign="Center"
            template={(props) => (
              <div>
                <img
                  className="rounded-xl md:ml-3"
                  style={{ height: 30 }}
                  src={product6}
                  alt="order-item"
                />
              </div>
            )}
          />
          <ColumnDirective
            key="id"
            field="id"
            headerText="ID"
            width="150"
            textAlign="Center"
          />
          <ColumnDirective
            key="title"
            field="title"
            headerText="Title"
            width="150"
            textAlign="Center"
          />
          <ColumnDirective
            key="duration"
            field="duration"
            headerText="Duration"
            width="150"
            textAlign="Center"
          />
          {/* <ColumnDirective
            key="resolution"
            field="resolution"
            headerText="Resolution"
            width="150"
            textAlign="Center"
          /> */}
          <ColumnDirective
            key="play"
            field="play"
            headerText="Play"
            width="100"
            textAlign="Center"
            template={(props) => (
              <div>
                <button
                  type="button"
                  style={{ color: "#FFF", backgroundColor: currentColor }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                  onClick={onClickplayButton}
                >
                  <BiPlayCircle />
                </button>
              </div>
            )}
          />
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default FolderDetail;
