import { useEffect, RefObject } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("mousedown", listener);
    
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, closeMenu]);
};

export const convertDate = (date: string) => {
  let newDate = new Date(date);
  let released = newDate.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
  return released
}

let date = new Date().setDate(1)
export const firstDayMonth = new Date(date).toISOString().split('T')[0]
export const today = new Date().toISOString().split('T')[0]

//@ts-expect-error
export const theme = JSON.parse(localStorage.getItem('darkTheme'))