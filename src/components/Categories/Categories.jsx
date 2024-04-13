import axios from "axios";
import { useEffect, useState } from "react";
import "./Categories.css"
import { useCategory } from "../../context";

export const Categories = () => {
    const [categories, setCategories] = useState([])
    const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(0);
    const {hotelCategory, setHotelCategory} = useCategory();

    const handleShowMoreLeftClick = () => {
        
        setNumberOfCategoriesToShow((prev) => prev - 10)
    }

    const handleShowMoreRightClick = () => {
        
        setNumberOfCategoriesToShow((prev) => prev + 10)
    }


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://travelappbackend.cyclic.app/api/category");
                const categoriesToShow = data.slice(
                    numberOfCategoriesToShow+10 > data.length ? data.length -10 : numberOfCategoriesToShow, 
                    numberOfCategoriesToShow > data.length ? data.length : numberOfCategoriesToShow + 10)

                setCategories(categoriesToShow)
            } catch (err) {
                console.log(err)
            }
        })();

    }, [numberOfCategoriesToShow]);

    const handleCategoryClick = (category) => {
  
        setHotelCategory(category)
    }
    console.log({hotelCategory})


    

    return (
        <section className="categories d-flex align-center gap-larger cursor-pointer shadow">
            {
                numberOfCategoriesToShow >= 10 && (
                    <button className="button btn-category btn-left fixed cursor-pointer"
                     onClick={handleShowMoreLeftClick}>
                        <span class="material-icons-outlined">
                            chevron_left
                        </span>
                    </button>
                )
            }

            {categories && categories.map(({ _id, category }) =>(
                 <span key={_id} className={`${category === hotelCategory ? "border-bottom" : ''}`} onClick={() => handleCategoryClick(category)}>
                    {category}
                </span>))}
            {
                numberOfCategoriesToShow <= categories.length && (
                    <button className="button btn-category btn-right fixed cursor-pointer" 
                    onClick={handleShowMoreRightClick}>

                        <span class="material-icons-outlined">
                            chevron_right
                        </span>

                    </button>
                )
            }

        </section>
    )
}
