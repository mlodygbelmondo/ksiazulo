import { atom, useAtom } from "jotai";

const searchBarAtom = atom("");

const useSearchBarAtom = () => useAtom(searchBarAtom);

const selectLocationTextAtom = atom<null | string>("");

const useSelectLocationTextAtom = () => useAtom(selectLocationTextAtom);

export { useSearchBarAtom, useSelectLocationTextAtom };
