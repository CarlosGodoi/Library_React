import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ILogin } from '../../../Pages/Login/interface';
import userAuth from '../../../Services/auth';

type IUser = {
  email: string;
};

interface IUserContext {
  user: IUser;
  handleLogin: (values: ILogin) => Promise<boolean>;
}

interface IProps {
  children: ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider: React.FC<IProps> = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({
    email: '',
  });

  const handleLogin = async (values: ILogin) => {
    let result = true;
    await userAuth(values)
      .then((resp: ILogin) => {
        setUser({ email: resp.email });
        localStorage.setItem('email', resp.email);
        result = true;
      })
      .catch((err) => {
        console.log(err);
        result = false;
      });

    return result;
  };

  useEffect(() => {
    const userHistorage = localStorage.getItem('email');
    if (userHistorage) {
      setUser({ email: userHistorage });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

function useAuth(): IUserContext {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useAuth };
