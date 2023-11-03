import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import React from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import imageLogo from "../../assets/images/logo-signin.jfif";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService.js";
import { useMutationHooks } from "../../hooks/userMutationHook";
import Loading from "../../components/LoadingComponent/Loading.js";
import * as message from "../../components/Message/Message.js";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
//import updateUser from "../../redux/slides/userSlide.js";
import { updateUser } from "../../redux/slides/userSlide";
const SignInPage = () => {
  const navigate = useNavigate();

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isLoading, isSuccess } = mutation;
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      localStorage.setItem("access_token", data?.access_token);
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log("decoded", decoded);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    // console.log("data", res?.data);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  const handleSignin = () => {
    mutation.mutate({
      email,
      password,
    });
    // console.log("signin", email, password);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Hello</h1>
          <p>Login and create account</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}

          <ButtonComponent
            disabled={!email.length || !password.length}
            onClick={handleSignin}
            size={40}
            styleButton={{
              backgroundColor: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Sign In"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>

          <p>
            <WrapperTextLight>Forgot Password</WrapperTextLight>
          </p>
          <p>
            No account ?{" "}
            <WrapperTextLight onClick={handleNavigateSignUp}>
              Create account?
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Buy in H&A Kingdoms</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};
export default SignInPage;
