import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import VerifyOtp from "../components/VerifyOtp";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isCounting, setIsCounting] = useState(false);

  return (
    <div>
      {!isSuccess ? (
        <RegisterForm
          user={user}
          setUser={setUser}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
          setIsCounting={setIsCounting}
          setTimer={setTimer}
        />
      ) : (
        <VerifyOtp
          user={user}
          isCounting={isCounting}
          setIsCounting={setIsCounting}
          timer={timer}
          setTimer={setTimer}
        />
      )}
    </div>
  );
}
