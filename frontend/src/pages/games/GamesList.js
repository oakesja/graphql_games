import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import QueryResponseView from "../../components/QueryResponseView";
import "./GameList.css";

const GAMES_QUERY = gql`
  query ListGames {
    games {
      id
      name
      developer {
        name
      }
    }
  }
`;

export default function GameList() {
  const response = useQuery(GAMES_QUERY);
  return (
    <QueryResponseView {...response}>
      {data => data.games.map(gameBlurb)}
    </QueryResponseView>
  );
}

function gameBlurb(game) {
  return (
    <div key={game.id} className="game">
      <Link to={`/game/${game.id}`}>{game.name}</Link>
      <span> from {game.developer.name}</span>
    </div>
  );
}
