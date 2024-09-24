import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }
  return data;
}

export const getCabins = async function () {
  const { data, error } = await supabase
    .from("cabins")
    .select("id,name,maxCapacity,regularPrice,discount,image");

  if (error) {
    console.error(error);
  }
  return data;
};
