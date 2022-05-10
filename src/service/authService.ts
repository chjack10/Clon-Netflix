import { LoginUser } from '../features/auth/models/LoginUser';
import { NewUser } from '../features/auth/models/NewUser';
import { User } from '../features/auth/models/User';

const register = async (newUser: NewUser): Promise<User | null> => {
  const res: User = {
    id: '123',
    name: newUser.name,
    favouriteList: [],
  };
  return res;
};

const login = async (loginUser: FormData): Promise<User | null> => {
  const res: User = {
    id: '123',
    name: 'User1',
    favouriteList: ['10', '50', '100'],
  };
  return res;
};

const logout = async (): Promise<User | null> => {
  const res: User = {
    id: '',
    name: '',
    favouriteList: [],
  };
  return res;
};

export default {
  register,
  login,
  logout,
};
