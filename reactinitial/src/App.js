import React, { useEffect, useState } from "react"
import Characters from "./components/Characters"
import LoadingMask from "./components/LoadingMask"
import Subsrciption from "./components/Subsrciption"

const App = () => {

    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        fetch("https://demoapi.com/api/series/howimetyourmother")
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                setCharacters(json)
            })
    }, [])

    return (
        <div>

            <h1>Series Api</h1>
            {
                characters ? characters.map((character, index) => <Characters key={character.name} name={character.name} details={character.details} />) : <LoadingMask />
            }

            <Subsrciption />

        </div>
    )
}

export default App
