import { Layout } from "antd";
import { useEffect } from "react";
import reducer from "./reducer";
const { Header, Content, Sider } = Layout;

export default function App({store}) {
  useEffect(() => {
    store.injectReducer('app2', reducer);
  }, [])
  return <div>remote2</div>;
}
