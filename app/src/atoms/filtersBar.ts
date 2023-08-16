import { atom, useAtom } from "jotai";

const searchBarAtom = atom("");

export const useSearchBarAtom = () => useAtom(searchBarAtom);
