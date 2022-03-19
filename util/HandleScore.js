export default function handleScore() {
  return {
    scoreFour(credits, creditFours) {
      return (
        credits.reduce((acc, cur, index) => acc + cur * creditFours[index], 0) /
        credits.reduce((acc, cur) => acc + cur, 0)
      );
    },
    scoreTen(marks, credits) {
      return (
        marks.reduce((acc, cur, index) => acc + cur * credits[index], 0) /
        credits.reduce((acc, cur) => acc + cur, 0)
      );
    },
    fourScore(mark){
        if(mark >= 8.5){
            return 4
        } else{
            if(mark >= 7)
                return 3
            else{
                if(mark >= 5.5){
                    return 2
                } else{
                    if(mark >= 4)
                        return 1
                    return 0
                }
            }
        }
    },
  };
}
