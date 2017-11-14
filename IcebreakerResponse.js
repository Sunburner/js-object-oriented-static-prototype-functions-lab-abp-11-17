function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return data.map(function(IcebreakerResponseData) {
    return new IcebreakerResponse(IcebreakerResponseData[0], IcebreakerResponseData [1])
  })

}

return emails.map(function(email){
  return new IcebreakerResponse(email)
  
})
}