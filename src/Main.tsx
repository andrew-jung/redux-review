import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "./counterSlice";
import { useGetPokemonByIdQuery } from './pokemonService';
import { typeToColorMapping } from './pokeColors';

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
  const typeNamePrimary = data?.types[0].type.name
  const typeNameSecondary = data?.types[1] ? data?.types[1]?.type.name : typeNamePrimary

  return (
    <div>
      <h1 className="big-val">Current Pokemon: #{counter}</h1>
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
          <h3 style={{color: typeToColorMapping[typeNameSecondary]}}>{data.species.name}</h3>
          <img style={{backgroundColor: typeToColorMapping[typeNamePrimary]}}src={data.sprites.front_default} alt={data.species.name} />
          <img style={{backgroundColor: typeToColorMapping[typeNamePrimary]}}src={data.sprites.front_shiny} alt={`shiny ${data.species.name}`} />
        </>
      ) : null}
      </div>
    </div>
  );
};

export default Main;
