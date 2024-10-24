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
  fetchFoodItems,
  addFoodItem,
} from "./user";
import { searchFood, getFoodNutrients } from "./food";

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
  fetchFoodItems,
  addFoodItem,
};
