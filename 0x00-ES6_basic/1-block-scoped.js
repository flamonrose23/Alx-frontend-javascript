export default function taskBlock(TrueorFalse) {
	const task = true;
	const task1 = false;

	if (TrueorFalse) {
		const task = false;
		const task1 = true;
	}

	return [task, task1];
}
