import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../routes";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
      </Provider>
    </BrowserRouter>
  );
}
