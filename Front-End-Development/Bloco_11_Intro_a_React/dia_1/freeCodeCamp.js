

const JSX = <h1>Hello JSX!</h1>;

const JSX = (
    <div>
        <h1></h1>
        <p></p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
);

const JSX = (
  <div>
    {/*This is a comment*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));

const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

const MyComponent = function() {
  // Change code below this line
  return <div>
  Some string of text
  </div>
  // Change code above this line
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
  return  <div>
    <h1>Hello React!</h1>
  </div>
    // Change code above this line
  }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
          <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};