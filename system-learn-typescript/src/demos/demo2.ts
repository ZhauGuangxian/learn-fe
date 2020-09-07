// 本节学习一下泛型

// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

let Ivalue = identity<number>(2);

// 泛型约束
interface LengthWise {
  length: number;
}

function lengthIdentity<T extends LengthWise>(arg: T): number {
  return arg.length;
}

// 泛型接口
interface UperIdent<T> {
  getData(arg: T): T;
  //<T>(arg:T):T
}
interface UperIdent2 {
  <T>(arg: T): T;
}

const fn1: UperIdent<number> = {
  getData: function(num) {
    return num * 2;
  },
};

const fn2: UperIdent2 = function<T>(str: T) {
  return str;
};
