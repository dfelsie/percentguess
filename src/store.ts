import { create } from "zustand";

const useStore = create((set) => ({
  questionNum: 0,
  guessList: [] as number[],
}));
