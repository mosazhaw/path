import {StringUtility} from "./string-utility";

export class ColorUtility {

    private static colors = [
        "blue",
        "green",
        "red",
        "yellow",
        "orange",
        "pink",
        "purple",
        "lime",
        "magenta",
        "teal",
        "turquoise",
        "green-sea",
        "emerald",
        "nephritis",
        "peter-river",
        "belize-hole",
        "amethyst",
        "wisteria",
        "wet-asphalt",
        "midnight-blue",
        "sun-flower",
        "carrot",
        "pumpkin",
        "alizarin",
        "pomegranate",
        "clouds",
        "silver",
        "concrete",
        "asbestos",
        "info",
        "danger",
        "warning",
        "success"
    ]

    public static isPathDefaultColor(color:string) : boolean {
        return this.colors.indexOf(color) > 0;
    }

}