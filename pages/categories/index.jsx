import CategoriesPage from "../../components/templates/CategoriesPage";

const Categories = ({ data }) => {
  return (
    <div>
      <CategoriesPage data={data} />
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const exactTime = cookingTime.split(" ")[0];

      if (cookingTime && time === "less" && +exactTime <= 30) {
        return detail;
      } else if (time === "more" && +exactTime > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return {
    props: { data: filteredData },
  };
}
