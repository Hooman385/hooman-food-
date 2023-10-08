import Card from "../modules/Card";
import styles from "./MenuPage.module.css";

function MenuPage({ data }) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
