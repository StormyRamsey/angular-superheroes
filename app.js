let superheroData= [
  {name:"Storm", phone:"202-555-1212", comic:"DC Comics", photo_url:"https://s-media-cache-ak0.pinimg.com/736x/90/88/38/9088387b170f53af79d45b84c6d81596.jpg"},
  {name:"Harley Quinn", phone:"202-555-1212", comic:"DC Comics", photo_url:"https://s-media-cache-ak0.pinimg.com/736x/cb/e3/8c/cbe38cfd74bd94003988c9593076de2c.jpg"},
  {name:"Catwoman", phone:"202-555-1212", comic:"Marvel", photo_url:"https://s-media-cache-ak0.pinimg.com/originals/86/d9/42/86d942b08905875aaceb69a5706c936d.jpg"},
  {name:"Wonder Woman", phone:"202-555-1212", comic:"Marvel", photo_url:"https://am24.akamaized.net/tms/cnt/uploads/2017/04/IMG_0365.jpg"},
  {name:"Poison Ivy", phone:"202-555-1212", comic:"DC Comics", photo_url:"https://vignette3.wikia.nocookie.net/batman/images/1/1b/Poison_Ivy_%28Uma%29.jpg/revision/latest?cb=20151129223649"},
  {name:"Stormy Cat", phone:"202-555-1212", comic:"WDI", photo_url:"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/293582_10150446810073949_519688439_n.jpg?oh=9201d8494cb7a08c166938defe2df67d&oe=59BBC957"}
]

angular.module("superheroApp", [])
.controller("SuperheroController", [
  SuperheroControllerFunction
])

function SuperheroControllerFunction (){
  this.superhero = superheroData
  this.newSuperhero = {}
  this.addSuperhero = function(){
    let superhero = this.newSuperhero
    this.superhero.push(superhero)
    this.newSuperhero = {}
  }
}
