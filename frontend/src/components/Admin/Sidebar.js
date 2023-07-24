import React, { useState } from "react";
import "./sidebar.css";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState("false");
  const toggleSidebar = () => {
    setSidebar((previusState) => !previusState);
  };
  return (
    <div className="">
      <div
        onClick={toggleSidebar}
        className="  absolute border  inline-block  left-4 top-20 "
      >
        <AiOutlineArrowRight />
      </div>
      <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <div className="flex items-start justify-between">
          <Link to="/admin/dashboard">
            <p>
              <DashboardIcon /> Dashboard
            </p>
          </Link>
          <AiOutlineClose
            onClick={toggleSidebar}
            className="text-xl  mt-4 mr-2"
          />
        </div>
        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label="Products">
              <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
              </Link>

              <Link to="/admin/product">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
              </Link>
            </TreeItem>
          </TreeView>
        </Link>
        <Link to="/admin/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </Link>
        <Link to="/admin/reviews">
          <p>
            <RateReviewIcon />
            Reviews
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
