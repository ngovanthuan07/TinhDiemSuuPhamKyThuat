import html from '../core.js'
import {connect} from '../store.js'
import Form from '../component/Form.js'
import Table from '../component/Table.js'
import Score from '../component/Score.js'
function App({marks,isCheck}){
    return html`
        <div>
            <h1 class="text-center"}>TÍNH ĐIỂM TRUNG BÌNH HỌC KỲ ĐẠI HỌC SPKT ĐÀ NẴNG</h1>
            ${Form()}
            ${marks.length > 0 && Table()}
            ${isCheck && marks.length > 0 && Score()}
        </div>
        
    `
}
export default connect()(App)