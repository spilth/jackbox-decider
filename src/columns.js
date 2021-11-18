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
      <span>
        Players <FontAwesomeIcon icon={faUsers} fixedWidth />
      </span>
    ),
    accessor: (game) => `${game.minPlayers}-${game.maxPlayers}`,
    className: "d-none d-sm-table-cell",
  },
  {
    Header: (
      <span className="d-none d-sm-table-cell">
        Family Friendly Setting <FontAwesomeIcon icon={faChild} fixedWidth />
      </span>
    ),
    accessor: "familyFriendlySetting",
    className: "text-center",
    Cell: BoolCell,
    sortType: "basic",
  },
  {
    Header: (
      <span className="d-none d-sm-table-cell">
        Manual Censoring <FontAwesomeIcon icon={faBan} fixedWidth />
      </span>
    ),
    accessor: "manualCensoring",
    className: "text-center",
    Cell: BoolCell,
    sortType: "basic",
  },
  {
    Header: (
      <span className="d-none d-sm-table-cell">
        Extended Timers <FontAwesomeIcon icon={faStopwatch} fixedWidth />
      </span>
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
