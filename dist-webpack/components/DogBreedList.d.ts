import { Component } from "react";
interface State {
    loading: boolean;
    dogBreeds: string[];
    error: Error | null;
}
export default class DogBreedList extends Component<{}, State> {
    state: {
        loading: boolean;
        dogBreeds: never[];
        error: null;
    };
    componentDidMount: () => Promise<void>;
    render(): JSX.Element;
}
export {};
