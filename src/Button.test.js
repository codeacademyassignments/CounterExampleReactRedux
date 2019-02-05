import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
// import { isMainThread } from 'worker_threads';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


describe('Button',()=>{
  it('should render a button',()=>{
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();

  })
})