import { Suspense, lazy } from "react";
// import Canceled from "../components/Canceled/Canceled";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
const Canceled = lazy(() => import("../components/Canceled/Canceled"));

const CanceledPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <Canceled />
      </Suspense>
    </MasterLayout>
  );
};

export default CanceledPage;
