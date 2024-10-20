import {
  loginUser,
  registerProvider,
  registerPatient,
  checkProviderCode,
} from "./authentication";
import {
  updateUser,
  getPatient,
  getProvider,
  getProviderPatients,
} from "./user";
import { searchFood, getFoodNutrients } from "./food";
import { fetchPatientFoodEntries } from "./user";

export {
  loginUser,
  registerProvider,
  registerPatient,
  updateUser,
  searchFood,
  getFoodNutrients,
  getPatient,
  getProvider,
  getProviderPatients,
  checkProviderCode,
  fetchPatientFoodEntries,
};
