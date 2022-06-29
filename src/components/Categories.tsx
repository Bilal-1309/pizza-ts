import React, {memo} from "react";

type CategoriesProps = {
    category: number,
    handleCategory: any
}

const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

const Categories: React.FC<CategoriesProps> = memo(({category, handleCategory}) => {

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
});

export default Categories;