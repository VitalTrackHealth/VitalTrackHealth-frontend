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
  fetchFoodItemsProvider,
  addFoodItem,
  deleteFoodItem,
  addProvider,
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
  fetchFoodItemsProvider,
  addFoodItem,
  deleteFoodItem,
  addProvider,
};
