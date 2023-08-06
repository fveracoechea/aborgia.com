import { useEffect, useMemo, useState } from 'react';

function getInitialMatch(query: string) {
  // Prevents SSR issues
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
}

export function useMediaQuery(
  query: string,
  listener?: (event: MediaQueryListEvent) => void,
): boolean {
  const [matches, setMatches] = useState<boolean>(getInitialMatch(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    function handleChange(event: MediaQueryListEvent) {
      if (listener) listener(event);
      setMatches(event.matches);
    }

    // Triggered at the first client-side load and if query changes
    setMatches(matchMedia.matches);

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query, listener]);

  return matches;
}
