//creating a framed rectangle around the text

export default function addFramedRectangle(text: string) {
    const horizontalLine = '─'.repeat(text.length + 4);
    const framedText = `┌${horizontalLine}┐\n ${text}  \n└${horizontalLine}┘`;

    return framedText;
}

