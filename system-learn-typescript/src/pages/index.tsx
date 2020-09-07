import React from 'react';
import styles from './index.less';

// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>System Learn TypeScript</h1>
//     </div>
//   );
// };
enum Color {
  Red,
  Green,
  Blue,
}
// let c: string = Color[1]; 打印的是‘green’
let c: number = Color.Red; //let c: Color = Color.Red;  打印的是0
interface Istate {
  [propname: string]: any;
}

interface Iprops {
  [propname: string]: any;
}

export default class Index extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
  }
  componentDidMount() {
    console.log(c);
  }
  render() {
    return (
      <div>
        <h1 className={styles.title}>System Learn TypeScript</h1>
      </div>
    );
  }
}
