import {
  BsFillCheckCircleFill,
  BsFillTrashFill,
  BsFillPencilFill,
} from "react-icons/bs";

export const styles = {
  todoState: {
    general:
      "border-l-8  p-5 mb-5 w-full rounded-md shadow-md flex justify-between items-center px-12",
    pending: "border-blue-600 bg-blue-50  hover:bg-blue-200",
    delayed: "border-red-600 bg-red-50 hover:bg-red-200",
    done: "border-green-600 bg-green-50 hover:bg-green-200",
  },
  forms: {
    register_and_login:
      "flex flex-col items-center justify-center py-10 px-5 bg-slate-100 w-full sm:w-[30rem] rounded-md drop-shadow-md",
    add_and_update_todo:
      "flex flex-col  px-4 py-6 mt-5 mb-10 w-full sm:w-[30rem] sm:mx-auto rounded-md shadow-md bg-slate-200 ",
  },
  formFields: {
    general: "p-3 mb-5 outline-none w-full rounded-md",
    textField: "placeholder-slate-300 rounded-md text-slate-800 font-semibold",
    date: "w-2/5",
  },
  button: {
    general: "py-4 rounded-md font-bold text-white uppercase w-2/5",
    register_and_login: "bg-green-500 hover:bg-green-600",
    addTodo: "self-end bg-green-500 hover:bg-green-600",
    updateTodo: "self-end bg-yellow-500 hover:bg-yellow-600",
    logout: "bg-blue-500 hover: bg-blue-600",
  },
  icons: {
    done: <BsFillCheckCircleFill />,
    delete: <BsFillTrashFill />,
    update: <BsFillPencilFill />,
  },
  error:
    "p-4 border-4 border-red-400 mb-5 w-full sm:w-[30rem] text-center text-red-500 bg-red-200 rounded-md font-bold uppercase text-2xl",
};
