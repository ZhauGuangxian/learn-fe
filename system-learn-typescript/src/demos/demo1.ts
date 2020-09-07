interface Animail {
  name: string;
  power: number;
  speed: number;
  say?(): string;
}
// 接口继承
interface Cat extends Animail {
  length: number;
}

type Lady = {
  name: string;
  bust: number;
  height: number;
};

// type 不可以 extends
// type Lady2 extends Lady = {

// }

// 一个对象可以同时做为函数和对象使用，并带有额外的属性
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 20;
  counter.reset = function() {};
  return counter;
}

// 箭头函数里使用this，this要设置一个显性参数
interface Deck {
  word: string;
  getWord(this: Deck): () => string;
}

export const deck: Deck = {
  word: 'Legion',
  getWord: function(this: Deck) {
    return () => {
      return this.word;
    };
  },
};

export const cats: Cat[] = [
  {
    name: '咪咪',
    power: 7,
    speed: 6,
    length: 45,
    say: () => '喵',
  },
  {
    name: '花花',
    power: 5,
    speed: 6,
    length: 39,
    say: () => '老吴',
  },
];
