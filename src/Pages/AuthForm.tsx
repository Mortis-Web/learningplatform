import loginSVG from '../assets/images/loginSVG.png';
import Login from '../components/AuthForms/Login';
import Signin from '../components/AuthForms/Signin';
type AuthFormProps = {
  mode: 'login' | 'signin';
};

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  return (
    <section className="flex min-h-[100dvh] overflow-y-clip md:min-h-screen">
      <article className="flex w-full items-center justify-center bg-white px-6 text-black sm:px-10">
        {mode === 'login' ? <Login /> : <Signin />}
      </article>

      <article className="hidden w-full items-center justify-center bg-[var(--ButtonColor)] md:flex">
        <div className="min-h-[50%] min-w-[50%] px-4">
          <img src={loginSVG} alt="loginSVG" />
        </div>
      </article>
    </section>
  );
};

export default AuthForm;
