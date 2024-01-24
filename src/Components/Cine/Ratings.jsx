import { FaStar } from "react-icons/fa";
import Star from "../../assets/star.svg";
export default function Ratings({ rating }) {
    const ratings = Array(rating).fill(Star);
    return (
        <div className='flex items-center space-x-1 mb-5'>
            {ratings
                ? ratings.map((item, index) => {
                      return (
                          <FaStar
                              className='text-primary'
                              key={index}
                          />
                      );
                  })
                : "No Rating"}
        </div>
    );
}

