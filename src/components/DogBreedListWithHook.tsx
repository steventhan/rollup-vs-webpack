import React, { useState, useEffect } from "react";
import axios from "axios";

import DogBreed from "./DogBreed";

interface ResponseData {
  message: {
    [key: string]: string[];
  };
}

export default function DogBreedWithHook() {
  const [dogBreeds, setDogBreeds] = useState([] as string[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get<ResponseData>(
          "https://dog.ceo/api/breeds/list/all"
        );
        setDogBreeds(Object.keys(res.data.message));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <ul>
        {dogBreeds.map((breed) => (
          <DogBreed key={breed} breed={breed} />
        ))}
      </ul>
    </div>
  );
}
