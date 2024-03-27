import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { ViewQuizComponent } from "./viewQuiz/viewQuiz.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private isEditing = false;
    private isTaking = false;
    private viewQuiz: ViewQuizComponent;

    constructor() {
        super(html, css);

        this.viewQuiz = new ViewQuizComponent();
        this.addComponent(this.viewQuiz);

        this.createSpanishQuiz();
    }

    createSpanishQuiz(): void {
        this.viewQuiz.setName("Spanish Vocabulary");
        this.viewQuiz.addQuestion(
            "Spanish Vocabulary",
            "What is word for 'to eat' in spanish?",
            "1",
        );
        this.viewQuiz.addQuestion(
            "Spanish Vocabulary",
            "What is word for 'to drink' in spanish?",
            "2",
        );
    }
}
