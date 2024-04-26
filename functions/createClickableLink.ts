
//create a clickable link using ANSI escape codes 

export default function createClickableLink(text: string) {
    const clickableText = `\u001b]8;;${URL}\u001b\\${text}\u001b]8;;\u001b\\`;

    return clickableText;
}