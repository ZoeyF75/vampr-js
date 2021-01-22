class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentPos = this;
    let count = 0;
    
    while(currentPos.creator) {
      currentPos = currentPos.creator;
      count++;
    }
    return count; 
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // let currentThis = this;
    // let currentVamp = vampire;
    // console.log(currentThis.numberOfVampiresFromOriginal);
    // console.log(currentVamp.numberOfVampiresFromOriginal);
    
    // //if either is root then return root
    // if (!vampire.creator || !this.creator) {
    //   return this;
    // }

    // //if distance from root isn't equal make it equal 
    // while (currentVamp.numberOfVampiresFromOriginal !== currentThis.numberOfVampiresFromOriginal) {
    //   if (currentVamp.numberOfVampiresFromOriginal < currentThis.numberOfVampiresFromOriginal) {
    //     currentVamp = currentVamp.creator;
    //   } else {
    //     currentThis = currentThis.creator;
    //   }
    // }

    // if (currentThis.creator) {
    //   if (currentVamp.creator === currentThis.creator) {
    //     return currentVamp === currentThis ? currentThis : currentThis.creator;
    //   } 
    // } else {
      
    // }
  }
}

module.exports = Vampire;

