import { describe, expect, test, beforeAll } from "@jest/globals";
import { ViewQuizComponent } from "./viewQuiz.component";
import { bootstrap } from "@gsilber/webez";

describe("ViewQuizComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ViewQuizComponent>(ViewQuizComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ViewQuizComponent);
        });
    });
});
