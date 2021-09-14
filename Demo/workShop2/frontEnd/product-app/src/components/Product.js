import React from "react";

function Products(props) {
  return (
    <React.Fragment>
      <tr class="table">
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onClick={props.deleteBook}
          >
            delete
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={props.updateButtonHandler}
          >
            update
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={props.detailButtonHandler}
          >
            Detail
          </button>
        </td>
        <td>
          <div class="col-sm-4">
            <select
              name="comment"
              className="comment"
              onChange={props.onChangeComment}
            >
              <option value="none">None</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Bad">Bad</option>
            </select>
          </div>
          <button className="btn btn-success" onClick={props.commentButtonHandler}>comment</button>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default Products;
