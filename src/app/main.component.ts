import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { Quiz } from "./data/quizzes";
import { ViewQuizComponent } from "./viewQuiz/viewQuiz.component";
import { EXAMPLES } from "./data/examples";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    private isEditing = false;
    private isTaking = false;
    private quiz: Quiz = EXAMPLES[0]; // new Quiz("Untitled Quiz", []);
    private viewQuiz: ViewQuizComponent;

    constructor() {
        super(html, css);

        this.viewQuiz = new ViewQuizComponent(this.quiz);
        this.addComponent(this.viewQuiz);
    }
}
