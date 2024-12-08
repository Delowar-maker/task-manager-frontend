import { lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";
const New = lazy(() => import("../components/New/New"));

const NewPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <New />
      </Suspense>
    </MasterLayout>
  );
};

export default NewPage;
