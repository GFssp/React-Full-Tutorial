import { useState, useEffect } from "react"

// Runs everytime page renders
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((err) => {
                if (err.name === 'AbortError'){
                    console.log("fetch aborted")
                } else {
                    setIsLoading(false)
                    setError(err.message)
                }
            })

            return () => abortCont.abort()
    }, [url]) // The empty array ensures the effect only happens in the begging 
    
    return {data, isLoading, error}
}

export default useFetch

/* {Error && <div>{Error}</div>}
                {isLoading && <div>Loading...</div>}
                {/* Only runs if blogs isn't null */
               /*  {blogs && <BlogList 
                blogs={blogs} />} */ 