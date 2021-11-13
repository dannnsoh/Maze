const { Engine, Render, Runner, Composite, Bodies, MouseConstraint, Mouse } = Matter;

const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		width,
		height
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Mouse
Composite.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas)
	})
);

// Walls
const walls = [
	// top
	Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
	// bottom
	Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
	// left
	Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
	// right
	Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
];
Composite.add(world, walls);

// Random Shapes
for (let i = 0; i < 25; i++) {
	if (Math.random() > 0.5) {
		Composite.add(
			world,
			Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
		);
	} else {
		Composite.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 35)
		);
	}
}
