import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

export const ALL_OPTION = "ALL";
export const INPROGRESS_OPTION = "INPROGRESS";
export const COMPLETED_OPTION = "COMPLETED";

function TodoFilter(props) {
  let { selected, onChangeSelection } = props;

  function onClickHandler(e) {
    // console.log(e.target.value);
    onChangeSelection(e.target.value);
  }

  return (
    <div>
      <FormControlLabel
        value="all"
        control={
          <Radio
            color="primary"
            checked={selected === ALL_OPTION}
            value={ALL_OPTION}
            onClick={onClickHandler}
          />
        }
        label="All"
        labelPlacement="start"
      />{" "}
      <FormControlLabel
        value="checked"
        checked
        control={
          <Radio
            color="primary"
            checked={selected === INPROGRESS_OPTION}
            value={INPROGRESS_OPTION}
            onClick={onClickHandler}
          />
        }
        label="In progress"
        labelPlacement="start"
      />
      <FormControlLabel
        value="completed"
        control={
          <Radio
            color="primary"
            checked={selected === COMPLETED_OPTION}
            value={COMPLETED_OPTION}
            onClick={onClickHandler}
          />
        }
        label="Completed"
        labelPlacement="start"
      />
    </div>
  );
}
export default TodoFilter;
