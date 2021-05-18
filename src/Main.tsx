import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "./counterSlice";
import { useGetPokemonByIdQuery } from './pokemonService';

interface CounterState {
  counter: {
    value: number
  }
}
const Main = () => {
  const dispatch = useDispatch();
  const counterState = (state: CounterState) => state.counter.value
  const counter = useSelector(counterState);

  const { data, error, isLoading } = useGetPokemonByIdQuery(counter);

  return (
    <div>
      <div className="big-val">Current Pokemon: #{counter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div className="pokemon">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img height={200} width={200} src={data.sprites.front_default} alt={data.species.name} />
          <img height={200} width={200} src={data.sprites.front_shiny} alt={`shiny ${data.species.name}`} />
        </>
      ) : null}
      </div>
    </div>
  );
};

export default Main;
