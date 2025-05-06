import { PayloadFormCar } from "@/types/flower";
import axios from "axios";

export const sendEmail = async (data: PayloadFormCar) => {
  try {
    const res = await axios.post("/api/send-email", data);
    return res;
  } catch (error) {
    throw error;
  }
};
