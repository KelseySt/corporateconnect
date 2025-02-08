import mongoose, { Schema, Document, Model} from "mongoose";

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    points: number;
    company: string;
}

const UserSchema = new Schema<IUser>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    points: {type: Number, required: false},
    company: {type: String, required: false}
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;