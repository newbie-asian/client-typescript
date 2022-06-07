import { FC } from "react";
import TextField from "../../forms/TextField/TextField";
import TextArea from "../../forms/TextArea/TextArea";
import Button from "../../buttons/Button";
import { styles } from "../../../utils/Styles/styles";
import { IAddTodoProps } from "./types";

const AddTodo: FC<IAddTodoProps> = ({
  todo,
  handleChange,
  handleSubmit,
  isDelayedTodo,
}: IAddTodoProps) => (
  <div className="mx-5">
    <form className={styles?.forms.add_and_update_todo} onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="title"
        value={todo.title}
        handleChange={handleChange}
        placeholder="Todo Title"
        genStyles={styles?.formFields.general}
        uniqueStyles={styles?.formFields.textField}
      />
      <TextArea
        name="description"
        value={todo.description}
        handleChange={handleChange}
        placeholder="Todo Description"
      />
      <label htmlFor="deadline" className="block ">
        Deadline
      </label>
      <TextField
        type="date"
        name="deadline"
        value={todo.deadline}
        handleChange={handleChange}
        genStyles={styles?.formFields.general}
        uniqueStyles={styles?.formFields.date}
      />
      {isDelayedTodo && (
        <p className="text-xs text-red-400 font-bold -mt-3">
          Cannot set deadline prior to creation date.
        </p>
      )}
      <Button
        btnTitle="Add Todo"
        genStyles={styles?.button.general}
        uniqueStyles={styles?.button.addTodo}
      />
    </form>
  </div>
);

export default AddTodo;
