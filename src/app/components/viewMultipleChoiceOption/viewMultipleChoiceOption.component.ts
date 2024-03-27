import { BindInnerHTML, EzComponent } from "@gsilber/webez";
import html from "./viewMultipleChoiceOption.component.html";
import css from "./viewMultipleChoiceOption.component.css";

export class ViewMultipleChoiceOptionComponent extends EzComponent {
    @BindInnerHTML("text")
    private text: string;
    constructor(text: string = "Blank Option") {
        super(html, css);
        this.text = text;
    }
}
