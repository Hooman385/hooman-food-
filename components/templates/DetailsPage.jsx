import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./DetailsPage.module.css";

const DetailsPage = (props) => {
  const {
    name,
    id,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;
  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location /> {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />${discount ? (price * (100 - discount)) / 100 : price}
            </span>
            {discount ? (
              <span className={styles.discount}>%{discount} Off</span>
            ) : null}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {details.map((item, index) => (
              <li key={index}>
                <p>{Object.keys(item)[0]}</p>
                <span>{Object.values(item)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>

          {recipe.map((item, index) => (
            <div key={index} className={index % 2 ? styles.odd : styles.even}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default DetailsPage;
