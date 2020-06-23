import React from "react";

interface DogBreedProps {
  breed: string;
}

export default function DogBreed({ breed }: DogBreedProps): JSX.Element {
  return <li>{breed}</li>;
}
