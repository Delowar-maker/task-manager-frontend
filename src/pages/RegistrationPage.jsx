import { lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Registration = lazy(() =>
  import("../components/Registration/Registration")
);

const RegistrationPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Registration />
    </Suspense>
  );
};

export default RegistrationPage;
