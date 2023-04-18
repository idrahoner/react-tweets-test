import Select from "react-select";
import { useDispatch } from "react-redux";
import { toggleFilterStatus } from "../../redux";
import { FILTER_STATUS } from "helpers";
import { FilterContainer } from "./FilterSelector.styled";

const options = [
  { value: FILTER_STATUS.all, label: "All" },
  { value: FILTER_STATUS.follow, label: "Follow" },
  { value: FILTER_STATUS.followings, label: "Followings" },
];

export default function FilterSelector() {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <Select
        defaultValue={options[0]}
        name="color"
        onChange={(options) => dispatch(toggleFilterStatus(options.value))}
        options={options}
      />
    </FilterContainer>
  );
}
