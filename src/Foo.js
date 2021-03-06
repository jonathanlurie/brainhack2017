/*
* Author    Jonathan Lurie - http://me.jonahanlurie.fr
* License   MIT
* Link      https://github.com/jonathanlurie/es6module
* Lab       MCIN - http://mcin.ca/ - Montreal Neurological Institute
*/

import { Image2D } from 'pixpipejs';

/** Class representing a foo. */
class Foo {

  /**
   * Create a foo.
   * @param {number} anAttribute - a value.
   * @param {number} aSecondAttribute - another value.
   */
  constructor(anAttribute, aSecondAttribute = 10 ) {
    console.log( Image2D );
    this.anAttribute = anAttribute;
    this.aSecondAttribute = aSecondAttribute;
    console.log("a foo is constructed");
  }

  /**
   * Set anAttribute.
   * @param {number} a - the value to give to anAttribute.
   */
  setAnAttribute(a){
    this.anAttribute = a;
    console.log("calling setAnAttribute()");
  }

  /**
   * Display anAttribute.
   */
  printAnAttribute(){
    console.log(this.anAttribute);
  }

  /**
  * @return {number} The anAttribute value.
  */
  getAnAttribute(){
    return this.anAttribute;
  }

}

export { Foo };
