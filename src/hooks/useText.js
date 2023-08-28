import React from 'react'

const useText = (string) => {
    const [placeholder, setPlaceholder] = React.useState(string[0])
    const index = React.useRef(0)

    React.useEffect(() => {
        if (index.current == 0) {
            index.current++
            setPlaceholder((prevState) => prevState + string[index.current])
        } else {
            function tick() {
                setPlaceholder(
                    (placeholder) => placeholder + string[index.current]
                )
                index.current++
            }
            if (index.current < string.length - 1) {
                let addChar = setInterval(tick, 80)
                return () => clearInterval(addChar)
            }
        }
    }, [placeholder])

    return placeholder
}
export default useText
