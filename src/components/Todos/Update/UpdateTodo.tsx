import { FC } from "react";
import TextField from "@components/forms/TextField/TextField";
import TextArea from "@components/forms/TextArea/TextArea";
import Button from "@components/buttons/Button";
import { styles } from "../../../utils/Styles/styles";

const UpdateTodo: FC = ({ todo, handleChange, handleSubmit }) => (
  <div className="mx-5">
    <form className={styles?.forms.add_and_update_todo} onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="title"
        handleChange={handleChange}
        placeholder={todo.title}
        genStyles={styles?.formFields.general}
        uniqueStyles={styles?.formFields.textField}
      />
      <TextArea
        name="description"
        handleChange={handleChange}
        placeholder={todo.description}
        styles={styles}
      />

      <Button
        btnTitle="Update Todo"
        genStyles={styles?.button.general}
        uniqueStyles={styles?.button.updateTodo}
      />
    </form>
  </div>
);

export default UpdateTodo;
