import "/p5.min.js";

class WebStasch extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
		this.curves = 5;
		this.p5 = new p5(this.sketch, "web-stasch");
	}

	static get observedAttributes() {
		return ["curly"];
	}

	connectedCallback() {
		//Invoked each time the custom element is appended into a document-connected element.
	}

	disconnectedCallback() {
		//Invoked each time the custom element is disconnected from the document's DOM.
	}

	adoptedCallback() {
		//Invoked each time the custom element is moved to a new document.
	}

	attributeChangedCallback(name, oldValue, newValue) {
		//Invoked each time one of the custom element's attributes is added, removed, or changed.
		// Which attributes to notice change for is specified in a static get observedAttributes method
	}

	//Mo-Rendering
	sketch(s) {
		s.setup = (bezier = 0) => {
			s.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
			// s.noFill();
			s.bezierDetail(5);
		};

		s.draw = () => {
			s.beginShape();
			s.vertex(200, 200);
			s.vertex(250, 180);

			s.vertex(50, 50);
			s.vertex(60, 40);
			s.vertex(60, 60);

			//Lip
			s.vertex(150, 180);
			s.endShape(s.CLOSE);
			// for (var i = 0; i < 400; i += 20) {
			// 	s.bezier(
			// 		i / 2.0,
			// 		window.innerWidth / 2 + i,
			// 		window.innerWidth / 2,
			// 		20,
			// 		44,
			// 		30,
			// 		24 - i / 16.0,
			// 		30 + i / 8.0
			// 	);
			// }
		};
	}
}

customElements.define("web-stasch", WebStasch);
