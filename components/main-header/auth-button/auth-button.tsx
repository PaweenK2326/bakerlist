import LoginButton from "./login-button/login-button";
import ProfileButton from "./profile-button/profile-button";

export default function AuthButton() {
  const isLogin: boolean = false;

  return (
    <>
      {!isLogin ? <LoginButton></LoginButton> : <ProfileButton></ProfileButton>}
    </>
  );
}
