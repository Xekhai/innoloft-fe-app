import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateProduct, fetchProduct } from "../../ReduxStore/slices/productSlice";
import { fetchTrl } from "../../ReduxStore/slices/trlSlice";

function ProductEdit() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const trlList = useSelector((state) => state.trl);

  const [updating, setUpdating] = useState(false);
  const [preview, setPreview] = useState("");

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: product,
  });

  const description = watch("description");

  useEffect(() => {
    setPreview(description);
  }, [description]);

  useEffect(() => {
    setValue("description", product.description);
  }, [product, setValue]);

  useEffect(() => {
    dispatch(fetchTrl());
    dispatch(fetchProduct());
  }, [dispatch]);

  const onSubmit = async (data) => {
    setUpdating(true);
    await dispatch(updateProduct(data));
    alert("Update complete!");
    setUpdating(false);
  };

  return (
    <div className="bg-coolGray-50 min-h-screen flex items-center justify-center">
      <div className="w-full md:w-3/4 flex flex-col md:flex-row mt-4 px-4 md:justify-center">
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded px-8 pb-8 mb-4 pt-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="categories"
              >
                Categories
              </label>
              <input
                {...register("categories")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categories"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="businessModels"
              >
                Business Models
              </label>
              <input
                {...register("businessModels")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessModels"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="trl"
              >
                TRL
              </label>
              <select
                {...register("trl")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="trl"
              >
                {Array.isArray(trlList) &&
                  trlList.map((trl) => (
                    <option key={trl.id} value={trl.id}>
                      {trl.name}
                    </option>
                  ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={updating}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                updating ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Save
            </button>

            <div className="mt-8">
              <h2 className="mb-4 mt-4 font-bold">Preview:</h2>
              <div dangerouslySetInnerHTML={{ __html: preview }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
