import Swal, { SweetAlertIcon } from "sweetalert2";

export const myAlertFire = (message: string, icon: SweetAlertIcon) => {
  Swal.fire({
    position: "top",
    text: message,
    icon: icon,
    showConfirmButton: false,
    timer: 1500,
  });
};
