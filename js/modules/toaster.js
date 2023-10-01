const toaster = () => {
    const object = {
        name: 'имя',
        message: 'сообщение',
    }
    document.addEventListener("DOMContentLoaded", function () {
      const name = document.querySelector(".name");
      const message = document.querySelector(".message");
      const toast = document.querySelector(".toast");
      const cross = document.querySelector(".toast__button");

      name.textContent = object.name
      message.textContent = object.message
  
      const slideRight = function () {
        toast.style.display = "flex";
        toast.classList.toggle("slide-right");
      };
      setTimeout(slideRight, 2000);
  
      const slideLeft = function () {
        toast.classList.add("slide-left");
        setTimeout(function () {
          toast.classList.remove("slide-left");
        }, 1000);
      };
  
      const toastDisplayNone = function () {
        toast.style.display = "none";
      };
  
      cross.addEventListener("click", function () {
        slideLeft();
        setTimeout(toastDisplayNone, 1000);
      });
    });
  };
  
  export default toaster;