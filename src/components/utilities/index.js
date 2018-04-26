export const setFontSize = () => {
    document.getElementsByTagName('html')[0].style.fontSize = `${window.innerWidth * 100 / 375}px`;
}