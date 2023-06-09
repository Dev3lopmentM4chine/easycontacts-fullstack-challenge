import Container from "../../components/container";
import StyledLogin from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/login.schemas";
import { tLogin } from "../../context/user/interfaces";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import Input from "../../components/input";
import Logo from "../../components/logo";
import Button from "../../components/button";
import backgroundImage from "../../assets/bg.svg"

const Login = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<tLogin>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const submit = (formData: tLogin) => {
    login(formData);
    reset();
  };

  return (
    <Container>
      <StyledLogin>
        <section className="formLogin">
          <div className="logo">
            <Logo />
            <p className="signupLink">
              Dont have an account? <a href="/register">Sign up!</a>
            </p>
          </div>

          <div className="title">
            <h1>Welcome Back</h1>
            <p>Login into your account</p>
          </div>

          <form onSubmit={handleSubmit(submit)}>
            <div className="containerInput">
              <div>
                <Input
                  errors={errors}
                  register={register}
                  idValue="email"
                  title="Email"
                  placeholder="example@gmail.com"
                  type="email"
                />
                {errors.email ? (
                  <p className="errorMessage">{errors.email.message}</p>
                ) : null}
              </div>
              <div>
                <Input
                  errors={errors}
                  register={register}
                  idValue="password"
                  title="Password"
                  placeholder="*******"
                  type="password"
                />
                {errors.password ? (
                  <p className="errorMessage">{errors.password.message}</p>
                ) : null}
              </div>
            </div>

            <div className="signupContainer">
              <p className="signupLink">
                Dont have an account? <a href="/register">Sign up!</a>
              </p>
            </div>

            <Button text="Login" type="submit" />
          </form>
        </section>
        <section className="illustration">
          <img src={backgroundImage} alt="" />
        </section>
      </StyledLogin>
    </Container>
  );
};

export default Login;
