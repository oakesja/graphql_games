import { useQuery, gql } from "@apollo/client";
import "./Game.css";
import { useParams } from "react-router-dom";
import QueryResponseView from "../../components/QueryResponseView";

const GAME_QUERY = gql`
  query findGame($id: Int!) {
    game(id: $id) {
      id
      name
      coverArtUrl
      developer {
        name
        logoUrl
      }
    }
  }
`;

export default function Game() {
  const { id } = useParams();
  const response = useQuery(GAME_QUERY, {
    variables: { id: parseInt(id) }
  });

  return (
    <QueryResponseView {...response}>
      {data => displayGame(data.game)}
    </QueryResponseView>
  );
}

function displayGame(game) {
  return (
    <div>
      <h4>{game.name}</h4>
      <img src={game.coverArtUrl} alt="coverArt" className="gameArt"></img>
      <h5>From {game.developer.name}</h5>
      <img
        src={game.developer.logoUrl}
        alt="developerLogo"
        className="devLogo"
      ></img>
    </div>
  );
}
