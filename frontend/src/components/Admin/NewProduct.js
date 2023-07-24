import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <SideBar />
      <div>
        <div className="  ">
          <h1 className=" text-dark md:text-4xl text-3xl font-bold text-center md:p-4 p-2 ">
            CREATE NEW PRODUCTS
          </h1>
        </div>

        {/* New Form Started from here */}
        <div className="  xl:mr-80 xl:ml-80 md:ml-40 md:mr-40 ml-10 mr-10 ">
          <form
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Product Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </div>
            <div className="mb-6">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-dark "
              >
                Product Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
              />
            </div>

            <div className="mb-6">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-dark"
              >
                Product Description
              </label>
              <textarea
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-dark "
              >
                Choose Category
              </label>
              <select
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-dark"
              >
                Product Stocks
              </label>
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className=" mb-6">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  multiple
                  onChange={createProductImagesChange}
                />
              </label>
            </div>
            <button
              className="bg-[#000000] mb-4 w-full text-white rounded-xl md:text-xl text-lg px-4 py-2"
              type="submit"
              disabled={loading ? true : false}
            >
              Create Now
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
