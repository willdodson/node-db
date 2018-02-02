let ratTest = [];
let id = 0;

module.exports = {
  create ( req, res ) {
    const { name, house, animal } = req.body;
    ratTest.push({ 
      name : name,
      house : house,
      animal : animal,
      
     });
    id++;
    res.status(200).send( ratTest );
    console.log(ratTest);
  },

  read (req, res) {
    res.status(200).send(ratTest)
  },

  update (req, res) {
    const { text } = req.body;
    // console.log('req.body / text + ', text)
    const name = req.params.name;
    const animal = req.params.animal;

    ratTest = ratTest.map((person, i) => {
      if (person.name === name) {
        // console.log('==update===>', i, id, person.house)
        person.animal = "Rat";
      }
      return person;
    })
    res.status(200).send( ratTest )
  },

  delete (req, res) {
    const deleteName = req.params.name;
    // console.log('deleteName ' + deleteName)
    const ratTestIndex = ratTest.findIndex( person => person.name == req.params.name );
    // console.log('ratTestIndex ' + ratTestIndex)
    if (ratTestIndex !== -1) {
      ratTest.splice(ratTestIndex, 1);
    }
    res.status(200).send(ratTest);
  }
}