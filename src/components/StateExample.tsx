'use client';

import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

export default function StateExample() {
  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log("count = ", count)
  },[count])

  const incrementCount = () => setCount(prev => prev + 1);
  const decrementCount = () => {
    setCount(prev => prev - 1);
  };
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setCount(isNaN(value) ? 0 : value);
  };


  return (
    <div className="space-y-4">
      <Label htmlFor="counter">Counter</Label>
      <Input
        id="counter"
        type="number"
        onChange={handleCountChange}
        value={count}
      />
      <div className="flex gap-2">
        <Button onClick={decrementCount}>-</Button>
        <Button onClick={incrementCount}>+</Button>
      </div>
    </div>
  );
}
