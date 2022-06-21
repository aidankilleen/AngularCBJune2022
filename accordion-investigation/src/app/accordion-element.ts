export class AccordionElement {
    //public title: string;
    //public text: string;

    //constructor(title:string, text:string) {
    //    this.title = title;
    //    this.text = text;
    //}

    constructor(public title:string, 
                public text:string, 
                public expanded:boolean = false) {

    }

}