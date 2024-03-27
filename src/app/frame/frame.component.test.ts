import { describe, expect, test, beforeAll } from "@jest/globals";
import { FrameComponent } from "./frame.component";
import { bootstrap } from "@gsilber/webez";

describe("FrameComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<FrameComponent>(FrameComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(FrameComponent);
        });
    });
});
