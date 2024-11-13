import { Link } from "react-router-dom";

const Category = ({ resi }) => {
  const { id, estate_title, description, facilities, image } = resi;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions">
          {facilities.map((faci, idx) => (
            <div key={idx} className="badge badge-outline">
              {faci}
            </div>
          ))}
        </div>
        <Link to={`/category/${id}`}>
          <button className="btn rounded-xl bg-green-900 hover:bg-transparent border hover:border-green-900 text-white hover:text-green-900 mt-3">View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
