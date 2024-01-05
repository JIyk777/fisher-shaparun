import { AuthBarContainer, AuthBarText, LogOut } from './AuthBar.styled';
import { MdExitToApp } from "react-icons/md";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const AuthBar = () => {
  const handelLogOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  return (
    <AuthBarContainer>
      <AuthBarText>Name</AuthBarText>
      <LogOut type='button' onClick={handelLogOut}>
        <MdExitToApp color='#24CCA7' size='18' />
      </LogOut>
    </AuthBarContainer>
  );
};

export default AuthBar;
