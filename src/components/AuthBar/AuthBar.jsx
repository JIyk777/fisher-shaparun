import { AuthBarContainer, AuthBarText, LogOut } from './AuthBar.styled';
import { MdExitToApp } from "react-icons/md";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const AuthBar = () => {
  const handelLogOut = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('online')
      } else {
        console.log('offline');
      }})
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('online')
      } else {
        console.log('offline');
      }})
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
