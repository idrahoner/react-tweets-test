import { useDispatch, useSelector } from "react-redux";
import { selectFilter, toggleFilterStatus } from "../../redux";
import { FILTER_STATUS } from "helpers";

export default function FilterSelector() {
  const filterStatus = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <select
      name="filter"
      value={filterStatus}
      onChange={(event) => {
        dispatch(toggleFilterStatus(event.target.value));
      }}
    >
      <option value={FILTER_STATUS.all}>All</option>
      <option value={FILTER_STATUS.follow}>Follow</option>
      <option value={FILTER_STATUS.followings}>Followings</option>
    </select>
  );
}
