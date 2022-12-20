import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountActions } from '../redux/reducers/count';
import { RootState } from '../redux/store';
import { Button } from 'react-bootstrap';

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
    <div className="d-flex justify-content-center align-items-center">
      <label className="mx-5">The count: {count}</label>
      <Button onClick={handleClick}>Count Me (And try redux devtools!)</Button>
      <p className="mx-5 my-5">Boostrap margin!</p>
    </div>
  );
};

export default ReduxCount;
