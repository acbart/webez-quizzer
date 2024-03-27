import { EzComponent } from "@gsilber/webez";
import html from "./frame.component.html";
import css from "./frame.component.css";

export class FrameComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
