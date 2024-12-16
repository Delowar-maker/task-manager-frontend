// import { configureStore } from "@reduxjs/toolkit";
// import settingsReducer from "../state-slice/settings-slice";
// import taskReducer from "../state-slice/task-slice";

// export default configureStore({
//     reducer: {
//         settings: settingsReducer,
//         task: taskReducer,
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../state-slice/profile-slice";
import settingsReducer from "../state-slice/settings-slice";
import summaryReducer from "../state-slice/summary-slice";
import taskReducer from "../state-slice/task-slice";
export default configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
    summary: summaryReducer,
    profile: profileReducer,
  },
});
