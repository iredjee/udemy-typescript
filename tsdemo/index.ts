import Faker from './faker';

interface Point {
  x: number,
  y: number,
};

const point: Point = {
  x: 5,
  y: 3,
};

const json: string = '{"x":7,"y":8}';
const p: Point = JSON.parse(json);


const fn = ({ x, y }: Point): void => {
  const sum = x + y;
  console.log(sum);
};

const a = [123, 345, 'a123'];
a[2] = 'asd';

const p1 = {
  x: 1,
  y: 2,
};


class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('Drive');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle);
console.log(vehicle.color);