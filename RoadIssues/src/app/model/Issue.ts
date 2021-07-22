import { User } from "./User";

export interface Issue{
    _id: String;
    streetAddress: String;
    City: String;
    Country: String;
    Description: String;
    raportedDate: Date;
    author: User["username"];
    assignedUser: User["username"];
    status: String;
  }