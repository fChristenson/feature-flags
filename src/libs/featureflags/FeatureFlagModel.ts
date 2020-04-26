import mongoose from "mongoose";
import { IFeatureFlags } from "./featureFlags";
const Schema = mongoose.Schema;

export interface IProps extends mongoose.Document {
  featureFlags: IFeatureFlags;
  createdAt: Date;
}

const FeatureFlagsSchema = new Schema<IProps>({
  featureFlags: Object,
  createdAt: { type: Date, default: Date.now },
});

export const FeatureFlagsModel = mongoose.model<IProps>(
  "FeatureFlags",
  FeatureFlagsSchema
);

export type IFeatureFlagsModel = mongoose.Model<IProps>;
