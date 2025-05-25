import loginSVG from "../assets/images/loginSVG.png"
import Login from "../components/AuthForms/Login";
import Signin from "../components/AuthForms/Signin";
type AuthFormProps = {
  mode: "login" | "signin";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  return (
    <section className="min-h-[100dvh] md:min-h-screen flex overflow-y-clip ">
      <article className=" bg-white flex  justify-center items-center text-black w-full px-10">
     {mode === "login" ? <Login /> : <Signin/>}

      </article>

      <article className="hidden md:flex bg-[var(--ButtonColor)]  items-center justify-center w-full">
        <div className="min-h-[50%] min-w-[50%] px-4"><img src={loginSVG} alt="loginSVG" /></div>

      </article>
    </section>
  )
}

export default AuthForm;