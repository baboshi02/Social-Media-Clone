import { Register } from "../../components/register";
export const SignIn = (props) => {
    authUser = props.authUser;
    return <Register name="signin" authUser={authUser} />;
};
