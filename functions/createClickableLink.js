
//create a clickable link using ANSI escape codes 

export default function createClickableLink(text) {
    const clickableText = `\u001b]8;;${url}\u001b\\${text}\u001b]8;;\u001b\\`;

    return clickableText;
}