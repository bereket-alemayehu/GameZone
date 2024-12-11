import {
  Card,
  CardBody,
  chakra,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}> {game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

{
  /* <PseudoBox
  as="button"
  color="blue.700"
  fontWeight="semibold"
  py={2}
  px={4}
  borderWidth="1px"
  borderColor="blue.500"
  rounded="md"
  _hover={{ bg: "blue.500", color: " white" }}
  _focus={{ boxShadow: "outline" }}
>
  Hover me
</PseudoBox>; */
}

export default GameCard;
