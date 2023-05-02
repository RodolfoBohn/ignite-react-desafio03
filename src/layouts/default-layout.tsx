import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { PageContentWrapper } from "./styles";

export const DefaultLayout = () => {
  return (
    <>
    <Header />
    <PageContentWrapper>
      <Outlet />
    </PageContentWrapper>
    </>
  )
}