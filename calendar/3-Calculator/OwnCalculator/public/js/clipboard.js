function copyToClipboardFunc() {
    let text = []
    text.push(
        '#canvas1 {' + '\n',
        '    border-top-left-radius: ' + document.getElementById('canvas1').style.getPropertyValue('border-top-left-radius') + ';' + '\n',
        '    border-top-right-radius: ' + document.getElementById('canvas1').style.getPropertyValue('border-top-right-radius') + ';' + '\n',
        '    border-bottom-left-radius: ' + document.getElementById('canvas1').style.getPropertyValue('border-bottom-left-radius') + ';' + '\n',
        '    border-bottom-right-radius: ' + document.getElementById('canvas1').style.getPropertyValue('border-bottom-right-radius') + ';' + '\n',
        '}'
    );

    let copyText = text.join('')
    navigator.clipboard.writeText(copyText);
    alert('Copied CSS');
}