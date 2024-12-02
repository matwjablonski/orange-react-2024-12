import { Test2 } from './Test2';

type TestProps = {
  name: string;
  address: string;
}

export const Test = ({ name, ...rest }: TestProps) => {
  // name 

  return <div> 
    {name}
    <Test2 />
  </div>
}

Test.defaultProps = {
  name: 'Test'
}
