import mongoose, { Document, Model, Schema, mongo } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();

// Email Verification pattern
const emailRegexPattern: RegExp =
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export interface Iuser extends Document {
  User_id: string;

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  locality: string;
  profilePic: {
    public_id: string;
    url: string;
  };
  state: string;
  country: string;
  pinCode: string;
  Dob: Date;
  student: {
    studentID: string;
    course: string;
    department: string;
    Joindate: Date;
  };
  teacher: {
    teacherID: string;
    designation: string;
    department: string;
    Joindate: Date;
  };
  staff: {
    staffID: string;
    designation: string;
    department: string;
    Joindate: Date;
  };
  userRole: string;
  isEmailVerified: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  isMember: boolean;

  SignAccessToken: () => string;
  SignRefreshToken: () => string;

}

const userSchema: Schema<Iuser> = new mongoose.Schema(
  {
    User_id: {
      type: String,
      unique: true,
      required: [true, "User ID cannot be blank"],
    },
    firstName: {
      type: String,
      required: [true, "First Name cannot be blank"],
    },
    lastName: { type: String },
    email: {
      type: String,
      required: [true, "Email cannot be blank"],
      validate: {
        validator: function (value: string) {
          return emailRegexPattern.test(value);
        },
        message: "Invalid Email, Use a valid email address",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password cannot be blank"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    address: { type: String },
    phone: { type: String },
    locality: { type: String },
    profilePic: {
      public_id: { type: String },
      url: { type: String },
    },
    state: { type: String },
    country: { type: String },
    pinCode: { type: String },
    Dob: { type: Date },
    student: {
      studentID: String,
      course: String,
      department: String,
      Joindate: Date,
    },
    teacher: {
      teacherID: String,
      designation: String,
      department: String,
      Joindate: Date,
    },
    staff: {
      staffID: String,
      designation: String,
      department: String,
      Joindate: Date,
    },
    userRole: { type: String },
    isEmailVerified: { type: Boolean },
    isAdmin: { type: Boolean },
    isVerified: { type: Boolean },
    isMember: { type: Boolean },
  },
  { timestamps: true }
);

//hash password

userSchema.pre<Iuser>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  if (!this.User_id) {
    this.User_id = await generateUniqueID();
  }

  next();
});

const User = mongoose.model<Iuser>("User", userSchema);

// to generate unique user id
const generateUniqueID = async (): Promise<string> => {
  const currentYear = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 1000);
  const formattedRandomNumber = randomNumber.toString().padStart(4, "0");
  const user_id = `${currentYear}${formattedRandomNumber}`;

  const existingUser = await User.findOne({ User_id: user_id });

  if (existingUser) {
    return generateUniqueID();
  }
  return user_id;
};

export { generateUniqueID };

//sign access token
userSchema.methods.SignAccessToken = function () {
  return jwt.sign({id: this._id}, process.env.ACCESS_TOKEN || '');
}

//compare password
userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel: Model<Iuser> = mongoose.model("User", userSchema);

export default userModel;
