import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const DynamicContent: React.FC = () => {
  const [setup, setSetup] = useState<string>();
  const [joke, setJoke] = useState<string>();

  const fetchTopics = useCallback(async () => {
    const backendUrl = "https://official-joke-api.appspot.com/random_joke";
    let topicsResult;

    try {
      topicsResult = await axios.get(backendUrl);
      return topicsResult;
    } catch (error: unknown) {
      console.error("error fetching topics");
      console.error(error);
    }
  }, []);

  useEffect(() => {
    let cancel = false;

    async function getTopics() {
      const result = await fetchTopics();
      if (!cancel && result) {
        setSetup(result.data.setup);
        setJoke(result.data.punchline);
      }
    }
    getTopics();
  }, []);

  return (
    <h4>
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
      {setup}
      {joke}
    </h4>
  );
};

export default DynamicContent;
