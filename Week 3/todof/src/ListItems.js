import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItems({ items, deleteItem, updateItem }) {
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {items.map((item) => {
          return (
            <div className="list" key={item.key}>
              <div className="item-card">
                <input
                  spellCheck={false}
                  value={item.text}
                  onChange={(e) => updateItem(e.target.value, item.key)}
                />
                <div>
                  <FontAwesomeIcon
                    className="faicons"
                    onClick={() => {
                      deleteItem(item.key);
                    }}
                    icon="trash"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default ListItems;
