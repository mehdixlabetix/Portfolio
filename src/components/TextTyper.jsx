import { useEffect, useState } from 'react'

const TextTyper = ({
    // now the phrase, interval and HTML element desired will come via props and we have some default values here
    text = '',
    interval = 100,
    Markup = 'span',
}) => {
    const [typedText, setTypedText] = useState('')

    const typingRender = (text, updater, interval) => {
        let localTypingIndex = 0
        let localTyping = ''
        if (text) {
            let printer = setInterval(() => {
                if (localTypingIndex < text.length) {
                    updater((localTyping += text[localTypingIndex]))
                    localTypingIndex += 1
                } else {
                    localTypingIndex = 0
                    localTyping = ''
                    clearInterval(printer)
                }
            }, interval)
        }
    }
    useEffect(() => {
        typingRender(text, setTypedText, interval)
    }, [text, interval])

    return typedText
}

export default TextTyper
