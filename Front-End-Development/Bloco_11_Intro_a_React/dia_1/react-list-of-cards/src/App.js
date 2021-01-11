import logo from './logo.svg';
import './App.css';

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

function CardList() {
return (
  <div className="row">
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/interactive-react-form/feature-image_hue33e11405e59e7e16f738f1cad0175c2_45614_825x0_resize_box_2.png"
        title="How To Make Interactive ReactJS Form"
        description="Let's write some interactive form with React"
        link="https://sebhastian.com/interactive-react-form"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/babel-guide/feature-image_hu2bad8f6979fb0b7ed7c55d5d78fd5168_30885_825x0_resize_box_2.png"
        title="Babelify your JavaScript code"
        description="Babel make JavaScript code browser-compatible."
        link="https://sebhastian.com/babel-guide"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/js-before-react/feature-image_hu387dfd4d036bf3c90a587203ee8af13c_17864_825x0_resize_box_2.png"
        title="JavaScript Basics Before You Learn React"
        description="Learn the prerequisites of learning React fast"
        link="https://sebhastian.com/js-before-react"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://www.investors.com/wp-content/uploads/2018/04/LS-perlman-042318-newscom.jpg"
        title="So You Believe That Coding is Hard"
        description="Let me tell you something, try to play violin and then we talk"
        link="https://www.youtube.com/watch?v=8uzLb6i-kU8"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://cdn.britannica.com/88/188088-050-B2B457A0.jpg"
        title="How To Make Golphins to Jump"
        description="Let's make some golphins to jump and to make React for us"
        link="https://www.youtube.com/watch?v=2YWrSE9OJIg"
      />
    </div>
 
  </div>
);
}

function App() {
  return (
    <div className="App">
      Hello World!
      <CardList />
    </div>
  );
}

export default App;
