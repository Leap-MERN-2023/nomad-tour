
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const StepThree = () => {
  const router = useRouter();
  const savePassword = async () => {
    try {
      await Swal.fire({
        ///
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглан нэвтэрнэ үү",
        icon: "success",
      });
      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
       className="flex flex-col items-center justify-center p-2 m-auto" 
      >
        <p
          className="items-center text-4xl font-bold"
        >
          Шинэ нууц үг cэргээх
        </p>

        <div className="w-[100% mb-2]">
          <input name="password" placeholder="Нууц үг"  className="rounded-xl p-3 mt-4 w-full"/>
          <input name="password" placeholder="Нууц үг давтах" className="rounded-xl p-3 mt-4 w-full" />
          <button onClick={savePassword} className="rounded-xl p-4 bg-blue-900 w-full mt-4">Сэргээх</button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
