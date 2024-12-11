import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface gameDetail {
  description_raw: string;
  name: string;
}
const GameDetailPage = () => {
  const { slug } = useParams();
  const [gameDetail, setGameDetail] = useState<gameDetail | null>(null); // to save the gamedetail if the endpoint is found
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGameDetailPage = async () => {
      try {
        const response = await apiClient.get(`/games/${slug}`);
        console.log(response.data);
        setGameDetail(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(
            err.message || "An error occurred while fetching game details."
          );
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetailPage();
  }, [slug]);

  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={7}>
      <Heading>{gameDetail?.name}</Heading>
      <Text pt={3} lineHeight={1.5}>
        {gameDetail?.description_raw}
      </Text>
    </Box>
  );
};

export default GameDetailPage;
// function useParams(): { slug: any; } {
//   throw new Error("Function not implemented.");
// }
