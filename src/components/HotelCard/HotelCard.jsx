import "./HotelCard.css"

export const HotelCard = ({hotel}) => {
    const {_id, name, image, address, state, rating, price} = hotel;
    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            
                <img className="img" src={image} alt={name} />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location">{address}, {state}</span>
                        <span className="rating d-flex align-center">
                            <span className="material-icons-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>

                    <p className="hotel-name"> {name}</p>
                    <p className="price-details">
                        <span className="price"> Rs. {price}</span>
                        <span>night</span>
                    </p>
                    

            </div>

            <button className="button btn-wishlist absolute">
                <span class="material-icons-outlined favorite cursor">
                    favorite
                </span>
            </button>

        </div>

    );
};