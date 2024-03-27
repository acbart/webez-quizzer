import { BindInnerHTML, EzComponent } from "@gsilber/webez";
import html from "./viewQuestion.component.html";
import css from "./viewQuestion.component.css";

export class ViewQuestionComponent extends EzComponent {
    @BindInnerHTML("title")
    private title: string;
    @BindInnerHTML("body")
    private body: string;
    @BindInnerHTML("id")
    private id: string;

    constructor(
        title: string = "Untitled Question",
        body: string = "This is a question.",
        id: string = "",
        altHtml?: string,
        altCss?: string,
    ) {
        super(altHtml || html, altCss || css);
        this.title = title;
        this.body = body;
        this.id = id;
    }
}
