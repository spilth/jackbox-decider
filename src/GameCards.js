import React from "react";
import {
  faChildReaching,
  faHourglass,
  faCommentSlash,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Stack } from "react-bootstrap";

const GameCards = ({ games }) => {
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
                    {game.minPlayers} - {game.maxPlayers} players
                  </Card.Subtitle>
                  <Card.Text>{game.display_description}</Card.Text>
                  <Stack direction="vertical" gap={1}>
                    {game.familyFriendlySetting && (
                      <div>
                        <FontAwesomeIcon icon={faChildReaching} fixedWidth />{" "}
                        Family Friendly Setting
                      </div>
                    )}
                    {game.manualCensoring && (
                      <div>
                        <FontAwesomeIcon icon={faCommentSlash} fixedWidth />{" "}
                        Manual Censoring
                      </div>
                    )}
                    {game.extendedTimers && (
                      <div>
                        <FontAwesomeIcon icon={faHourglass} fixedWidth />{" "}
                        Extended Timers
                      </div>
                    )}
                    {game.has_translation !== null &&
                      (game.has_translation ? (
                        <div>
                          <FontAwesomeIcon icon={faCircleCheck} fixedWidth />{" "}
                          Translated
                        </div>
                      ) : (
                        <div>
                          <FontAwesomeIcon icon={faCircleXmark} fixedWidth />{" "}
                          Not translated
                        </div>
                      ))}
                  </Stack>
                </Card.Body>
                <Card.Footer>
                  {game.pack_url ? (
                    <React.Fragment>
                      Part of{" "}
                      <a href={game.pack_url} className="text-decoration-none">
                        {game.pack}
                      </a>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>{game.pack}</React.Fragment>
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
