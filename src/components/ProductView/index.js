import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../ReduxStore/slices/productSlice";
import { fetchTrl } from "../../ReduxStore/slices/trlSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MainSection from "./components/MainSection";
import DetailSection from "./components/DetailSection";
import UserInfo from "./components/UserInfo";
import Video from "./components/Video";
import Map from "./components/Map";

function ProductView() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const trl = useSelector((state) => state.trl);
  const config = useSelector((state) => state.config); // access config from Redux state

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchTrl());
  }, [dispatch]);

  if (!product || !trl || !product.user || !product.company) {
    return (
      <div className="bg-coolGray-50 min-h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-coolGray-50 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-3/4 flex flex-col md:flex-row mt-4 px-4 md:justify-center">
        {config.hasUserSection && (  // Conditionally render UserInfo
          <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
            <UserInfo product={product} />
          </div>
        )}
        <div className={`w-full ${config.hasUserSection ? "md:w-3/4" : "md:w-full"}`}>
          <div className="flex items-center space-x-4 mb-4">
            <FontAwesomeIcon icon={faHome} className="text-gray-200" />
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-200" />
            <h1 className="text-gray-200">Products</h1>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            <span className="text-gray-500 font-bold">View Product</span>
          </div>
          <div className="card bg-white border rounded px-4">
            <MainSection product={product} />
          </div>
          <div className="card mt-4 bg-white border rounded p-4">
            <Video product={product} />
          </div>
          <div className="card mt-4 bg-white border rounded p-4">
            <DetailSection product={product} />
          </div>
          <div className="card mt-4 bg-white border rounded mb-4">
            <Map product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
