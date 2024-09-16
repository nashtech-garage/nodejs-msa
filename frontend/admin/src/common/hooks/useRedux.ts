import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { TRootState, TAppDispatch } from "@/store";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
export const useAppDispatch = () => useDispatch<TAppDispatch>()