import html from "./viewMultipleChoice.component.html";
import css from "./viewMultipleChoice.component.css";
import { ViewQuestionComponent } from "../../viewQuestion/viewQuestion.component";
import { ViewMultipleChoiceOptionComponent } from "../viewMultipleChoiceOption/viewMultipleChoiceOption.component";

export class ViewMultipleChoiceComponent extends ViewQuestionComponent {
    private options: ViewMultipleChoiceOptionComponent[] = [];

    constructor(
        title: string = "Untitled Question",
        body: string = "Missing Body",
        id: string = "",
        options: string[] = [],
        private correctOption: string = "",
    ) {
        super(title, body, id, html, css);

        options.forEach((option) => {
            this.addOption(option);
        });
    }

    addOption(optionText: string): void {
        const option = new ViewMultipleChoiceOptionComponent(optionText);
        this.addComponent(option, "options");
        this.options.push(option);
    }
}
