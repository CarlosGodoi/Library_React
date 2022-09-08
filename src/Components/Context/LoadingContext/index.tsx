import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ILoadingObject {
  visible: boolean;
}

interface LoadingContextInterface {
  loading: ILoadingObject;
  setLoading: Dispatch<SetStateAction<ILoadingObject>>;
}

interface Props {
  children: JSX.Element;
}

export const LoadingContext = createContext<LoadingContextInterface>({
  loading: {
    visible: false,
  },
  setLoading: () => {},
});

export const LoadingProvider = (props: Props) => {
  const [loading, setLoading] = useState<ILoadingObject>({
    visible: false,
  });

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);
  const { loading, setLoading } = context;

  return {
    loading,
    setLoading,
  };
}
