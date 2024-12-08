import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));

import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/MasterLayout";

const DashboardPage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <Dashboard />
      </Suspense>
    </MasterLayout>
  );
};

export default DashboardPage;
