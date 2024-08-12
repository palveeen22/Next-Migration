import { TUser } from "@/types/type";
import { Model } from "mongoose";
import { Schema, model, models } from "mongoose";

const UserSchema: Schema<TUser> = new Schema(
	{
		name: { type: String, required: true },
	},
	{
		timestamps: true,
		toJSON: {
			versionKey: false,
			virtuals: true,
			transform: (_, ret) => {
				delete ret._id;
			},
		},
	}
);
const User: Model<TUser> = models.User || model<TUser>("User", UserSchema);

export default User;
