import React from "react";

const Categories = ({category, handleCategory}) => {

  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

  return (
    <div className="categories">
      <ul>
        {
          categories.map((item, index) => (
            <li
              key={index}
              className={category === index ? 'active' : ''}
              onClick={() => handleCategory(index)}
            >
              {item}
            </li>
            )
          )
        }
      </ul>
    </div>
  )
};

export default Categories;