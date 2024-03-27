import { describe, expect, test, beforeAll } from "@jest/globals";
import { ViewQuestionComponent } from "./viewQuestion.component";
import { bootstrap } from "@gsilber/webez";

describe("ViewQuestionComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ViewQuestionComponent>(
            ViewQuestionComponent,
            html,
        );
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ViewQuestionComponent);
        });
    });
});
