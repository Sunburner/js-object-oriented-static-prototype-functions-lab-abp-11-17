function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
//   let icebreakers = []
//   emails.forEach(function(email){
//     icebreakers.push(new IcebreakerResponse(email))
//   })
// 
//   return icebreakers
// }

  return emails.map(function(email) {
    return new IcebreakerResponse(email)
  })

}

// // return emails.map(function(email){
// //   return new IcebreakerResponse(email)
// })
// }
//   const email = [
//     ["Avi", "avi@flatironschool.com"],
//     ["Grace", "grace@hopper.com"],
//     ["Alan", "alan@xparc.com"]
//   ]
// let users = IcebreakerResponse.BatchCreate(data)
