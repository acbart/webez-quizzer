import {
    BindStyle,
    BindValue,
    Click,
    EventSubject,
    EzComponent,
    Input,
} from "@gsilber/webez";
import html from "./editQuiz.component.html";
import css from "./editQuiz.component.css";

export class EditQuizComponent extends EzComponent {
    @BindValue("title")
    private title: string = "Untitled Quiz";

    @BindStyle("save", "display")
    private isDirty = "none";

    saving: EventSubject<void> = new EventSubject();

    constructor() {
        super(html, css);
    }

    @Input("title")
    updateDirtyStatus(): void {
        this.isDirty = "block";
    }

    @Click("save")
    saveChanges(): void {
        this.isDirty = "none";
        this.saving.next();
    }

    getTitle(): string {
        return this.title;
    }
    setTitle(title: string): void {
        this.title = title;
    }
}
