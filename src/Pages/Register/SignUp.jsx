import { Register } from "../../components/register";
export const SignUp = (props) => {
    authUser = props.authUser;
    return <Register name="signUp" authUser={authUser} />;
};
