import React from "react";

const Hello1=({greetTo,greetAlsoTo})=>{
    return(
        <>
        <h1>Hello {greetTo? (greetAlsoTo ? greetTo+" and "+greetAlsoTo:greetTo):greetAlsoTo}</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
        voluptas earum aliquid! Aperiam quisquam odit, fugiat voluptatum iste
        eveniet. Aut facere ipsam beatae ex? Mollitia, quia sapiente!
        Repellendus, quasi animi!
      </p>
        </>
    )
}

export default Hello1