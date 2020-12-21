import React from 'react';
import './SortCars.css';

function SortCars(props:any) {
  const{selectedSort,onSorting}=props;
    return (
        <div className="filter-sort">
        <label className="sort-label"> Sort by</label> {" "}
          <select className="select-sort"
            value={selectedSort}
            onChange={(e)=>{
               onSorting(selectedSort);
            }
            }
          >
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>
    )
}

export default SortCars
