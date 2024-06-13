import { useCallback, useEffect } from 'react';

export function useEscapePress(onEscapePress: (e: KeyboardEvent) => void, enabled = true) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapePress(e);
      }
    },
    [onEscapePress],
  );

  useEffect(() => {
    if (!enabled) return;
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handler, enabled]);
}
