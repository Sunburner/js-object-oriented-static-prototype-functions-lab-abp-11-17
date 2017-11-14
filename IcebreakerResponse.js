function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  let icebreakers = []
  emails.forEach(function(email){
    icebreakers.push(new IcebreakerResponse(email))
  })

  return icebreakers
}

//   return data.map(function(IcebreakerResponseData) {
//     return new IcebreakerResponse(IcebreakerResponseData[0], IcebreakerResponseData [1])
//   })
//
// }

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
