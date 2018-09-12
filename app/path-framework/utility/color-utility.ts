import {StringUtility} from "./string-utility";

export class ColorUtility {

    private static colors = {
        "blue": "#2e8bcc",
        "green": "#339933",
        "red": "#e51400",
        "yellow": "#ffc40d",
        "orange": "#f39c12",
        "pink": "#e671b8",
        "purple": "#7b4f9d",
        "lime": "#8cbf26",
        "magenta": "#ff0097",
        "teal": "#00aba9",
        "turquoise": "#1abc9c",
        "green-sea": "#16a085",
        "emerald": "#2ecc71",
        "nephritis": "#27ae60",
        "peter-river": "#3498db",
        "belize-hole": "#2980b9",
        "amethyst": "#9b59b6",
        "wisteria": "#8e44ad",
        "wet-asphalt": "#34495e",
        "midnight-blue": "#2c3e50",
        "sun-flower": "#f1c40f",
        "carrot": "#e67e22",
        "pumpkin": "#d35400",
        "alizarin": "#e74c3c",
        "pomegranate": "#c0392b",
        "clouds": "#ecf0f1",
        "silver": "#bdc3c7",
        "concrete": "#95a5a6",
        "asbestos": "#7f8c8d",
        "info": "#3498db",
        "danger": "#e74c3c",
        "warning": "#f1c40f",
        "success": "#2ecc71",
    }

    public static getReadableTextColor(backgroundColor:string) : string {
        if (StringUtility.isEmpty(backgroundColor)) {
            return "black";
        }
        // support css variables
        if (backgroundColor.startsWith("var(")) {
            let varName:string = backgroundColor.replace("var(","");
            varName = varName.replace(")","");
            backgroundColor = window.getComputedStyle(document.body).getPropertyValue(varName);
        }
        backgroundColor = backgroundColor.trim();

        // https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
        backgroundColor = backgroundColor.substring(1);      // strip #
        let rgb = parseInt(backgroundColor, 16);   // convert rrggbb to decimal
        let r = (rgb >> 16) & 0xff;  // extract red
        let g = (rgb >>  8) & 0xff;  // extract green
        let b = (rgb >>  0) & 0xff;  // extract blue

        let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma > 199) {
            // pick a different colour
            return "black";
        }
        return "white";
    }

    public static getColorByName(color:string) : string {
        return this.colors[color];
    }

}