import { FeatureFlagService } from "./featureflags/FeatureFlagService";
import { FeatureFlagsModel } from "./featureflags/FeatureFlagModel";

export const featureFlagService = new FeatureFlagService(FeatureFlagsModel);
