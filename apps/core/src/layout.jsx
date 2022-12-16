import { useState } from "react";
import { Button, Layout } from "antd";
const { Header, Content, Sider } = Layout;
import { Link } from "react-router-dom";
import routes from "../routes";
import { useFederatedComponent } from "./loader";
import { useLocation } from "react-router";
import store from "./store";

export default function App({ children }) {
  const { pathname } = useLocation();
  const { errorLoading, Component } = useFederatedComponent(
    routes.find(r => r.path === pathname),
  );
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Sider>
        {routes.map(({ name, path }) => (
          <Link to={path}>
            <Button>{name}</Button>
          </Link>
        ))}
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>{Component ? <Component store={store} /> : <div>loading</div>}</Content>
      </Layout>
    </Layout>
  );
}
