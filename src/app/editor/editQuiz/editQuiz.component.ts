import { BindStyle, BindValue, EzComponent, Input } from "@gsilber/webez";
import html from "./editQuiz.component.html";
import css from "./editQuiz.component.css";

export class EditQuizComponent extends EzComponent {
    @BindValue("title")
    private title: string = "Untitled Quiz";

    @BindStyle("save", "display")
    private isDirty = "none";
    constructor() {
        super(html, css);
    }

    @Input("title")
    updateDirtyStatus(): void {
        this.isDirty = "block";
    }
}
