import React from "react";

const Hello=({greetTo,greetAlsoTo})=>{
    return (
        <>
        <h1>Hello {greetTo} {greetAlsoTo? `and ${greetAlsoTo}`:''}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem in eligendi ipsam dolore. Exercitationem necessitatibus obcaecati, dicta incidunt doloremque similique ipsum autem ab. Officiis et in esse vero ut? Nulla nobis natus facere laudantium quam non tenetur deserunt. Iusto repudiandae corrupti totam suscipit voluptate, dolor eveniet maiores quod! Hic, quaerat.</p>
        </>
    )
}

export default Hello