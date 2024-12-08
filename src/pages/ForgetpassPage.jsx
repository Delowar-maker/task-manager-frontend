import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Forgetpass = lazy(() => import("../components/Forgetpass/Forgetpass"));

const ForgetpassPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Forgetpass />
    </Suspense>
  );
};

export default ForgetpassPage;
