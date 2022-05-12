import React from "react";
import {
  faChildReaching,
  faHourglass,
  faCommentSlash,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import translations from "./translations";

const GameCards = ({ games, lang }) => {
  return (
    <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
      {games
        .sort((a, b) => a.display_name.localeCompare(b.display_name))
        .map((game) => {
          return (
            <Col key={game.display_name}>
              <Card className="mb-4 shadow">
                {game.display_image && (
                  <a href={game.url}>
                    <Card.Img variant="top" src={`${game.display_image}`} />
                  </a>
                )}
                <Card.Body>
                  <Card.Title>
                    <a href={game.url} className="text-decoration-none">
                      {game.display_name}
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-2">
                    {game.minPlayers} - {game.maxPlayers}{" "}
                    {translations.players[lang]}
                  </Card.Subtitle>
                  <Card.Text>{game.display_description}</Card.Text>

                  <ul className="list-unstyled">
                    {game.familyFriendlySetting && (
                      <li>
                        <FontAwesomeIcon icon={faChildReaching} fixedWidth />{" "}
                        {translations.familyFriendlySetting[lang]}
                      </li>
                    )}
                    {game.manualCensoring && (
                      <li>
                        <FontAwesomeIcon icon={faCommentSlash} fixedWidth />{" "}
                        {translations.manualCensoring[lang]}
                      </li>
                    )}
                    {game.extendedTimers && (
                      <li>
                        <FontAwesomeIcon icon={faHourglass} fixedWidth />{" "}
                        {translations.extendedTimers[lang]}
                      </li>
                    )}
                    {game.has_translation !== null &&
                      (game.has_translation ? (
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} fixedWidth />{" "}
                          {translations.has_translation[lang]}
                        </li>
                      ) : (
                        <li>
                          <FontAwesomeIcon icon={faCircleXmark} fixedWidth />{" "}
                          {translations.no_translation[lang]}
                        </li>
                      ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  {game.pack_url ? (
                    <React.Fragment>
                      {translations.part_of[lang]}{" "}
                      <a href={game.pack_url} className="text-decoration-none">
                        {game.pack}
                      </a>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>{translations.standalone_title[lang]}</React.Fragment>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default GameCards;
