import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountActions } from '../redux/reducers/count';
import { RootState } from '../redux/store';

const ReduxCount = () => {
  const count = useSelector(({ countState }: RootState) => countState.count);
  const dispatch = useDispatch();
  const handleCountDisptch = () => {
    dispatch({ type: CountActions.INCREMENT });
  };

  const handleClick = (event: MouseEvent) => {
    handleCountDisptch();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <label className="text-3xl font-bold underline">The count: {count}</label>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Count Me (And try redux devtools!)
      </button>
    </div>
  );
};

export default ReduxCount;
