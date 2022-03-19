import html from "../core.js";
import { connect } from "../store.js";
import handleScore from "../util/HandleScore.js"



function Score({ marks, credits, creditFours }) {
  const {scoreFour,scoreTen} = handleScore()

  return html`
    <p>Thang điểm 4: ${scoreFour(credits, creditFours)}</p>
    <p>Thang điểm 10: ${scoreTen(marks, credits)}</p>
  `;
}

export default connect()(Score);
