import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function Form({mark, credit, isFocus}) {
  return html`
    <div >
      
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nhập điểm</label>
        <input type="number" class="form-control" placeholder="" 
          onchange="dispatch('handleChangeMark', this.value)"
          value="${mark}"
          />
       
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Nhập số tín chỉ</label
        >
        <input type="number" class="form-control" placeholder="" 
          value="${credit}" 
          onchange="dispatch('handleChangeCredit', this.value)"
        />
      </div>

      <button class="btn btn-primary" onclick="dispatch('add')" > Tính điểm </button>

      
    </div>
  `;
}

export default connect()(Form);
