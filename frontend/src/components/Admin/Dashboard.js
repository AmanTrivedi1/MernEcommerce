import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";

import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();
  Chart.register(...registerables);
  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products?.length - outOfStock],
      },
    ],
  };

  return (
    <>
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <h1 className="font-bold md:text-4xl mb-10 mt-10 text-dark  block text-center text-2xl ">
        ADMIN DASHBOARD
      </h1>

      <div className=" flex md:flex-row flex-col  md:items-center gap-5 p-4 md:justify-around ">
        <div className=" flex flex-col ">
          <p className="text-2xl text-dark font-semibold">Earned Amount</p>
          <span className="font-normal">₹{totalAmount}</span>
        </div>
        <Link to="/admin/products">
          <div className="flex border-4 rounded-lg px-4 py-2 border-dark  items-center flex-col">
            <p className="md:text-2xl text-dark text-xl font-semibold ">
              Total Products
            </p>
            <p>{products && products.length}</p>
          </div>
        </Link>
        <Link to="/admin/orders">
          <div className="flex border-4 border-dark rounded-lg px-4 py-2 items-center flex-col">
            <p className="md:text-2xl text-dark text-xl font-semibold ">
              Total Orders
            </p>
            <p>{orders && orders.length}</p>
          </div>
        </Link>
        <Link to="/admin/users">
          <div className="flex border-4 border-dark rounded-lg px-4 py-2 items-center flex-col">
            <p className="  text-dark md:text-2xl text-xl font-semibold ">
              Total Users
            </p>
            <p>{users && users.length}</p>
          </div>
        </Link>
      </div>

      <div className=" flex mt-4 md:flex-row flex-col  md:items-start items-center justify-center gap-10 ">
        <div className=" max-w-md">
          <Line data={lineState} />
        </div>

        <div className="">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
