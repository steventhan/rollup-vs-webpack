import React, { Component } from "react";
import axios from "axios";

import DogBreed from "./DogBreed";

interface ResponseData {
  message: {
    [key: string]: string[];
  };
}

interface State {
  loading: boolean;
  dogBreeds: string[];
  error: Error | null;
}

export default class DogBreedList extends Component<{}, State> {
  state = {
    loading: false,
    dogBreeds: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      const res = await axios.get<ResponseData>(
        "https://dog.ceo/api/breeds/list/all"
      );
      this.setState({
        loading: false,
        dogBreeds: Object.keys(res.data.message),
      });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { dogBreeds } = this.state;

    return (
      <div>
        <ul>
          {dogBreeds.map((breed) => <DogBreed key={breed} breed={breed} />)}
        </ul>
      </div>
    );
  }
}
