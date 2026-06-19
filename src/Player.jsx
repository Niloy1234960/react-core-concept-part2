import { useState } from "react"

export default function Player() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        const newSingle = runs + 1;
        setRuns(newSingle)
    }

    const handleDouble = () => {
        const newDouble = runs + 2;
        setRuns(newDouble)
    }

    const handleTriple = () => {
        const newTriple = runs + 3;
        setRuns(newTriple)
    }
    
    const handleFour = () => {
        const newFour = runs + 4;
        const updatedFour = fours + 1;
        setFours(updatedFour)
        setRuns(newFour)
    }

    const handleSix = () => {
        const newSix = runs + 6;
        const updatedSix = sixes + 1;
        setSixes(updatedSix)
        setRuns(newSix)
    }

    return (
        <div>
            <h3>Bangladeshi batsman</h3>
            <p>Score: {runs}</p>

            <p>Sixes: {sixes}</p>
            <p>Fours: {fours}</p>

            {
                runs >= 50 && <p>Congretss you got 50</p>
            }
            {
                runs >= 100 && <p>Wow you get a century</p>
            }

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTriple}>Triple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}