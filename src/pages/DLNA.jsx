import React, { useEffect, useState } from "react";
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

import ReactLoading from "react-loading";
import {
  ordersData,
  contextMenuItems,
  ordersGrid,
  Folders,
  gridOrderImage,
  earningData,
} from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import ApiService from "../services/api/ApiService";
import product1 from "../data/product1.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const DLNA = () => {
  //const { currentColor } = useStateContext();
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState();
  const [folders, setFolders] = useState();

  const onCardClick = (item) => {
    console.log(item);
  };

  useEffect(() => {
    setFolders(Folders.folders);
    //     const api = new ApiService();
    //     api
    //       .getFolders()
    //       .then((response) => response.json())
    //       .then((response) => {
    //         setIsLoading(false);
    //         setFolders(response.folders);
    //       })
    //       .catch((error) => {
    //         console.log("Error get files", error);
    //         setIsLoading(false);
    //         setError(error);
    //       })
    //       .finally();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* {isLoading && <ReactLoading type="bars" />} */}

      <Header category="Page" title="DLNA Folders" />
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {Folders.folders.map((item) => (
          <Link to={`/Folder/${item.id}`} key={item.id}>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <div className="e-card" style={{ textAlign: "center" }}>
                <div
                  className="e-card-image"
                  style={{ backgroundImage: `url(${product1})` }}
                >
                  <div className="e-card-header-title">{item.name}</div>
                </div>

                <div className="e-card-content">{item.parentFolderName}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DLNA;
