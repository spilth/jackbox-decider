import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faChild,
  faStopwatch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Party Pack',
    accessor: 'pack',
  },
  {
    id: "playerCount",
    Header: (
      <span>Players <FontAwesomeIcon icon={faUsers} fixedWidth /></span>),
    accessor: (row) => `${row.minPlayers}-${row.maxPlayers}`,
  },
  {
    Header: (
      <span>Family Friendly Setting <FontAwesomeIcon icon={faChild} fixedWidth /></span>
    ),
    accessor: "familyFriendlySetting",
    className: "text-center"
  },
  {
    Header: (
      <span>Manual Censoring <FontAwesomeIcon icon={faBan} fixedWidth /></span>
    ),
    accessor: "manualCensoring",
    className: "text-center"
  },
  {
    Header: (
      <span>Extended Timers <FontAwesomeIcon icon={faStopwatch} fixedWidth /></span>
    ),
    accessor: "extendedTimers",
  },
  {
    Header: "Description",
    accessor: "description",
  }
]
