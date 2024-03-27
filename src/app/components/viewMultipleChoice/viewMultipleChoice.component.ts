import html from "./viewMultipleChoice.component.html";
import css from "./viewMultipleChoice.component.css";
import { ViewQuestionComponent } from "../../viewQuestion/viewQuestion.component";

export class ViewMultipleChoiceComponent extends ViewQuestionComponent {
    constructor(
        private options: string[] = [],
        private correctOption: string = "",
    ) {
        super(html, css);
    }
}
