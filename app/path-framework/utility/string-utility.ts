export class StringUtility {

    public static isEmpty(str:string) : boolean {
        return (!str || 0 === str.length);
    }

}