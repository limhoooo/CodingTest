
function solution(people, limit) {
  const descPeople = people.sort((a,b)=>b-a)
  console.log(descPeople)
  let boatCount = 0
  descPeople.forEach(people=>{
      if(people + descPeople.at(-1) > limit){
          boatCount++
      }
      else{
          descPeople.pop()
          boatCount++
      }
  })
  return boatCount
}