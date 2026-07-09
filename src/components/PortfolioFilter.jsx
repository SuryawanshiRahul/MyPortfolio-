function PortfolioFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <ul className="filter-list">
      {categories.map((category) => (
        <li
          key={category}
          className="filter-item"
        >
          <button
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category === "all"
              ? "All"
              : category
                  .split(" ")
                  .map(
                    word =>
                      word.charAt(0).toUpperCase() +
                      word.slice(1)
                  )
                  .join(" ")}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PortfolioFilter;