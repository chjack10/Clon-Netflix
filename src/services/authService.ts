import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import App from '../firebase/config';

import { NewUser } from '../features/auth/models/NewUser';
import { User } from '../features/auth/models/User';

const auth = getAuth(App);

const register = async (newUser: NewUser): Promise<User | null> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );

    await updateProfile(user, {
      displayName: `${newUser.firstName} ${newUser.lastName}`,
    });

    if (user) {
      return {
        id: user.uid,
        firstName: `${newUser.firstName} ` ?? 'Unknown',
        lastName: `${newUser.lastName}` ?? 'Unknown',
      };
    }

    throw new Error('There was an error while trying to logging in');
  } catch (error) {
    console.log(error);
    throw new Error('There was an error while trying to logging in');
  }
};

const login = async (loginUser: NewUser): Promise<User | null> => {
  try {
    await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password);

    const user = auth.currentUser;

    const [firstName, lastName] = user?.displayName?.split(' ') ?? ['', ''];

    if (user)
      return {
        id: user.uid,
        firstName: firstName ?? 'Unknown',
        lastName: lastName ?? 'Unknown',
      };

    throw new Error('There was an error while trying to logging in');
  } catch (err) {
    console.error(err);
    throw new Error('There was an error while trying to logging in');
  }
};

const logout = async (): Promise<User | null> => {
  const res: User = {
    id: '',
    firstName: '',
    lastName: '',
  };
  return res;
};

export default {
  register,
  login,
  logout,
};
