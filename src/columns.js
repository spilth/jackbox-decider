import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faChild,
  faStopwatch,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const BoolCell = ({ cell: { value } }) => {
  return value ? (
    <FontAwesomeIcon icon={faCheck} fixedWidth color="green" />
  ) : (
    <FontAwesomeIcon icon={faTimes} fixedWidth color="red" />
  );
};

export const columns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell }) => {
      const game = cell.row.original;
      return (
        <a href={game.url} target="_blank" rel="noreferrer">
          {game.name}
        </a>
      );
    },
  },
  {
    Header: "Party Pack",
    accessor: "pack",
    Cell: ({ cell }) => {
      const game = cell.row.original;
      return (
        <a href={game.pack_url} target="_blank" rel="noreferrer">
          {game.pack}
        </a>
      );
    },
    className: "d-none d-md-table-cell",
  },
  {
    id: "playerCount",
    Header: (
      <>
        <span>Players </span>
        <FontAwesomeIcon icon={faUsers} fixedWidth />
      </>
    ),
    accessor: (game) => `${game.minPlayers}-${game.maxPlayers}`,
    className: "d-none d-sm-table-cell",
  },
  {
    Header: (
      <>
        <span className="d-none d-sm-table-cell">Family Friendly Setting </span>
        <FontAwesomeIcon icon={faChild} fixedWidth />
      </>
    ),
    accessor: "familyFriendlySetting",
    className: "text-center",
    Cell: BoolCell,
    sortType: "basic",
  },
  {
    Header: (
      <>
        <span className="d-none d-sm-table-cell">Manual Censoring </span>
        <FontAwesomeIcon icon={faBan} fixedWidth />
      </>
    ),
    accessor: "manualCensoring",
    className: "text-center",
    Cell: BoolCell,
    sortType: "basic",
  },
  {
    Header: (
      <>
        <span className="d-none d-sm-table-cell">Extended Timers </span>
        <FontAwesomeIcon icon={faStopwatch} fixedWidth />
      </>
    ),
    accessor: "extendedTimers",
    Cell: BoolCell,
    sortType: "basic",
  },
  {
    Header: "Description",
    accessor: "description",
    className: "d-none d-md-table-cell",
  },
];
