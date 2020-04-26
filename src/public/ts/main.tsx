import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import {
  IFeatureFlags,
  FeatureFlagState,
} from "../../libs/featureflags/featureFlags";

(async () => {
  const featureFlags: IFeatureFlags = await axios
    .get("/features")
    .then((r) => r.data);

  const App = () => {
    return (
      <div>
        <h1>Enter contact details to win money</h1>
        <form>
          <input type="text" placeholder="name" />
          <input type="tel" placeholder="phone" />
          {featureFlags.showVipButton === FeatureFlagState.ON && (
            <label htmlFor="vip">
              <span>VIP</span>
              <input type="checkbox" name="vip" />
            </label>
          )}
          <input type="submit" />
        </form>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
})();
