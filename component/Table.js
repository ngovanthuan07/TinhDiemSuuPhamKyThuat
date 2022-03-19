import html from "../core.js";
import { connect } from "../store.js";

function Table({ marks, credits, creditFours}) {
 

  return html`
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Điểm</th>
          <th scope="col">Tín chỉ</th>
          <th scope="col">Thang điểm 4</th>
          <th scope="col">Tùy chỉnh</th>
        </tr>
      </thead>
      <tbody>
        ${marks.map((mark, index) => {
          return `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${mark}</td>
            <td>${credits[index]}</td>
            <td>${creditFours[index]}</td>
            <td>
                <button
                  type="button" class="btn btn-danger" onclick="dispatch('destroy', ${index})">Xóa
                </button>
            </td>
          </tr>
          `;
        })}
      </tbody>
    </table>
  `;
}

export default connect()(Table);
