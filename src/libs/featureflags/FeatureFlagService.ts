import { IFeatureFlagsModel } from "./FeatureFlagModel";
import { IFeatureFlags, defaultFeatureFlags } from "./featureFlags";

export class FeatureFlagService {
  private model: IFeatureFlagsModel;

  constructor(model: IFeatureFlagsModel) {
    this.model = model;
  }

  async getFeatureFlags(): Promise<IFeatureFlags> {
    const flags = await this.model.findOne({});

    if (!flags) {
      const newFlags = await new this.model({
        featureFlags: defaultFeatureFlags,
      }).save();
      return newFlags.featureFlags;
    }

    return flags.featureFlags;
  }

  async setFeatureFlags(flags: IFeatureFlags): Promise<void> {
    await this.model.updateOne({}, { featureFlags: flags });
    return undefined;
  }
}
