import { MutableRefObject, useEffect } from 'react';

/**
 * Hook that executes a handler when click outside of the passed ref
 */
export function useClickAwayListener(
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    /**
     * Calls "handler" if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handler();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}
