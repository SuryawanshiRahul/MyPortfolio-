import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function PortfolioSelect({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const format = (text) =>
    text
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");

  return (
    <div className="filter-select-box">

      <button
        className="filter-select"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="select-value">
          {selectedCategory === "all"
            ? "Select Category"
            : format(selectedCategory)}
        </div>

        <div className="select-icon">
          <FaChevronDown />
        </div>
      </button>

      {isOpen && (
        <ul className="select-list">

          {categories.map((category) => (

            <li
              key={category}
              className="select-item"
            >

              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setIsOpen(false);
                }}
              >
                {format(category)}
              </button>

            </li>

          ))}

        </ul>
      )}

    </div>
  );
}

export default PortfolioSelect;