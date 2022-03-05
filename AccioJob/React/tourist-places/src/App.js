import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const toursFetched = await response.json();
      setTours(toursFetched);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <h1>
        <Loading />
      </h1>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

//Class based components

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tours: [],
//       loading: true,
//     };
//     this.fetchTours = this.fetchTours.bind(this);
//     this.removeTour = this.removeTour.bind(this);
//   }

//   removeTour(id) {
//     this.setState({
//       tours: this.state.tours.filter((tour) => tour.id !== id),
//     });
//   }

//   componentDidMount() {
//     this.fetchTours();
//   }
//   async fetchTours() {
//     try {
//       this.setState({ loading: true });
//       const response = await fetch(url);
//       const toursFetched = await response.json();
//       this.setState({
//         tours: toursFetched,
//         loading: false,
//       });
//     } catch (error) {
//       this.state({ loading: false });
//       console.log(error);
//     }
//   }

//   render() {
//     if (this.state.loading) {
//       return (
//         <h1>
//           <Loading />
//         </h1>
//       );
//     }

//     if (this.state.tours.length === 0) {
//       return (
//         <main>
//           <div className="title">
//             <h2>No Tours Left</h2>
//             <button className="btn" onClick={this.fetchTours}>
//               Refresh
//             </button>
//           </div>
//         </main>
//       );
//     }

//     return (
//       <div>
//         <Tours tours={this.state.tours} removeTour={this.removeTour} />
//       </div>
//     );
//   }
// }

export default App;
