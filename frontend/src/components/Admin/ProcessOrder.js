import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import "./processOrder.css";

const ProcessOrder = () => {
  const params = useParams();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("status", status);
    dispatch(updateOrder(params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, alert, error, params.id, isUpdated, updateError]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: order?.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <div className="border-b border-white mt-2 py-2">
                    <h1 className="md:text-3xl text-dark font-semibold text-xl">
                      Shipping Info:
                    </h1>
                    <div className="flex flex-col">
                      <div className="mt-2">
                        <p className="md:text-lg text-base font-bold opacity-60">
                          Name:
                        </p>
                        <span className="md:text-base text-sm">
                          {order?.user && order.user.name}
                        </span>
                      </div>
                      <div>
                        <p className="md:text-lg text-base font-bold opacity-60">
                          Phone:
                        </p>
                        <span className="md:text-base text-sm">
                          {order?.shippingInfo && order?.shippingInfo?.phoneNo}
                        </span>
                      </div>
                      <div>
                        <p className="md:text-lg text-base font-bold opacity-60">
                          Address:
                        </p>
                        <span className="md:text-base text-sm">
                          {order?.shippingInfo &&
                            `${order.shippingInfo.address}, ${order?.shippingInfo.city}, ${order?.shippingInfo.state}, ${order?.shippingInfo.pinCode}, ${order?.shippingInfo.country}`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-white">
                    <h1 className="md:text-3xl text-dark font-semibold text-xl">
                      Payment Info:
                    </h1>
                    <div className="  ">
                      <div className="mt-2">
                        <p className="md:text-lg opacity-60 text-base font-bold ">
                          Payment Status
                        </p>
                        <p className="md:text-base text-sm">
                          {order?.paymentInfo?.status}
                        </p>
                      </div>

                      <div className="mt-2">
                        <p className="text-bold opacity-60  md:text-lg font-bold text-base">
                          Amount:
                        </p>
                        <span className="md:text-base text-sm">
                          {order?.totalPrice && order?.totalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h1 className="md:text-3xl text-dark font-semibold text-xl">
                    Order Status
                  </h1>
                  <div className="">
                    <div>
                      <p className="md:text-base text-sm">
                        {order?.orderStatus && order?.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <h1 className="md:text-3xl text-dark font-semibold text-xl">
                    Your Cart Items:
                  </h1>
                  <div className="confirmCartItemsContainer">
                    {order?.orderItems &&
                      order?.orderItems.map((item) => (
                        <div key={item?.product}>
                          <img src={item?.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item?.name}
                          </Link>{" "}
                          <span>
                            {item?.quantity} X ₹{item?.price} ={" "}
                            <b>₹{item?.price * item?.quantity}</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  display:
                    order?.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>
                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
