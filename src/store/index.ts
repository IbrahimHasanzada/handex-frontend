export class General {
    private static instance: General;
    private general: any;

    private constructor() { }

    public static getInstance(): General {
        if (!General.instance) {
            General.instance = new General();
        }
        return General.instance;
    }

    getGeneral() {
        if (this.general) return this.general;
    }

    setGeneral(general: any) {
        this.general = general;
    }
}
