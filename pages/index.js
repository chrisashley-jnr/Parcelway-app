import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function App() {
  const [username, setUsername] = useState("");

  return <DashboardLogin {...dashboardLoginData} />;
}

function DashboardLogin(props) {
  const {
    parcelwayLogo,
    adminLogin,
    adminId,
    password,
    rememberMe,
    login,
    forAuthourisedPersonsOnly,
    contactTheDevelope,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard-login screen">
        <img
          className="parcelway-logo"
          src="/Images/logo.png"
          alt="Parcelway Logo"
        />
        <h2 className="admin-login"> {adminLogin}</h2>
        <div style={{width: "100%"}}>
          <label className="admin-id sourcesanspro-normal-shark-12px">
            {adminId}
          </label>
          <input type="text" className="input-field" name="input-field" />
        </div>
        <div style={{width: "100%"}}>
          <label className="password sourcesanspro-normal-shark-12px">
            {password}
          </label>
          <input type="text" className="input-field" name="input-field" />
        </div>
        <div className="frame-7">
          <input type="checkbox" name="input-field" value="" />
          <div className="rememberMe">{rememberMe}</div>
        </div>
        <div className="group-1">
          <button className="login">{login}</button>
        </div>
        <div className="for-authourised-persons-only sourcesanspro-noraml-shark-8px">
          {forAuthourisedPersonsOnly}
        </div>
        <p className="contact-the-develope sourcesanspro-normal-shark-8px">
          {contactTheDevelope}
        </p>
      </div>
    </div>
  );
}

function FormField() {
  return <input className="form-field" />;
}

const dashboardLoginData = {
  parcelwayLogo: "parcelway-Logo.jpg",
  adminLogin: "ADMIN LOGIN",
  adminId: "Admin ID",
  password: "Password",
  rememberMe: "Remember me",
  login: "Login",
  forAuthourisedPersonsOnly: " For Authourised persons only",
  contactTheDevelope:
    "Contact the developer team to fix any dashboard related issue",
};
