export enum FeatureFlagState {
  ON = "ON",
  OFF = "OFF",
}

export interface IFeatureFlags {
  showVipButton: FeatureFlagState;
}

// Every feature starts in OFF
export const defaultFeatureFlags: IFeatureFlags = {
  showVipButton: FeatureFlagState.OFF,
};
