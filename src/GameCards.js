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

const GameCards = ({ games, language }) => {
  return (
    <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
      {games
        .sort((a, b) => a.displayName.localeCompare(b.displayName))
        .map((game) => {
          return (
            <Col key={game.displayName}>
              <Card className="mb-4 shadow">
                {game.displayImage && (
                  <a href={game.url}>
                    <Card.Img variant="top" src={`${game.displayImage}`} />
                  </a>
                )}
                <Card.Body>
                  <Card.Title>
                    <a href={game.url} className="text-decoration-none">
                      {game.displayName}
                    </a>
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-2">
                    {game.minPlayers} - {game.maxPlayers}{" "}
                    {translations.players[language]}
                  </Card.Subtitle>
                  <Card.Text>{game.displayDescription}</Card.Text>

                  <ul className="list-unstyled">
                    {game.familyFriendlySetting && (
                      <li>
                        <FontAwesomeIcon icon={faChildReaching} fixedWidth />{" "}
                        {translations.familyFriendlySetting[language]}
                      </li>
                    )}
                    {game.manualCensoring && (
                      <li>
                        <FontAwesomeIcon icon={faCommentSlash} fixedWidth />{" "}
                        {translations.manualCensoring[language]}
                      </li>
                    )}
                    {game.extendedTimers && (
                      <li>
                        <FontAwesomeIcon icon={faHourglass} fixedWidth />{" "}
                        {translations.extendedTimers[language]}
                      </li>
                    )}
                    {game.hasTranslation !== null &&
                      (game.hasTranslation ? (
                        <li>
                          <FontAwesomeIcon icon={faCircleCheck} fixedWidth />{" "}
                          {translations.hasTranslation[language]}
                        </li>
                      ) : (
                        <li>
                          <FontAwesomeIcon icon={faCircleXmark} fixedWidth />{" "}
                          {translations.noTranslation[language]}
                        </li>
                      ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  {game.packUrl ? (
                    <React.Fragment>
                      {translations.partOf[language]}{" "}
                      <a href={game.packUrl} className="text-decoration-none">
                        {game.pack}
                      </a>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {translations.standaloneTitle[language]}
                    </React.Fragment>
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
