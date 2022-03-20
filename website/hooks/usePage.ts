import { useSinglePageQuery } from "apollo/generated";
import { useGlobalSettingsCtx } from "context/globalSettingsCtx";

const usePage = () => {
  const global = useGlobalSettingsCtx();
  const { data, loading, error } = useSinglePageQuery({
    variables: { route: global.route },
  });

  return {
    data,
    loading,
    error,
    global,
  };
};

export default usePage;
