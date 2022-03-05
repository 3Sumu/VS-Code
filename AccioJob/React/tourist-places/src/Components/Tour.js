import React, { useState } from "react";

function Tour({ id, info, image, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">$ {price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "show more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    </div>
  );
}

//Class based components
// export class Tour extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       readMore: false,
//     };
//     this.toggleReadMore = this.toggleReadMore.bind(this);
//   }

//   toggleReadMore() {
//     this.setState({ readMore: !this.state.readMore });
//   }

//   render() {
//     const { id, info, image, name, price, removeTour } = this.props;
//     return (
//       <div>
//         <article className="single-tour">
//           <img src={image} alt={name} />
//           <footer>
//             <div className="tour-info">
//               <h4>{name}</h4>
//               <h4 className="tour-price">$ {price}</h4>
//             </div>
//             <p>
//               {this.state.readMore ? info : `${info.substring(0, 200)}...`}
//               <button onClick={this.toggleReadMore}>
//                 {this.state.readMore ? "show less" : "show more"}
//               </button>
//             </p>
//             <button className="delete-btn" onClick={() => removeTour(id)}>
//               not interested
//             </button>
//           </footer>
//         </article>
//       </div>
//     );
//   }
// }

export default Tour;
