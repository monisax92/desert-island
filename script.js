const items = document.querySelectorAll('.item');
const boxes = document.querySelectorAll('.box');
const chooseBox = boxes[0];
const chosenBox = boxes[1];
const voteBtn = document.querySelector('.vote-btn');

items.forEach(item => {
	item.addEventListener('dragstart', () => {
		item.classList.add('is-dragged');
	});

	item.addEventListener('dragend', () => {
		item.classList.remove('is-dragged');
	});
});

boxes.forEach(box => {
	box.addEventListener('dragover', e => {
		const draggedItem = document.querySelector('.is-dragged');
		box.appendChild(draggedItem);

		handleItemsLimit();
	});
});

const handleItemsLimit = () => {
	const unchosenItems = chooseBox.querySelectorAll('.item');
	const chosenItems = chosenBox.querySelectorAll('.item');
	console.log(unchosenItems, chosenItems);
	if (chosenItems.length === 5) {
		unchosenItems.forEach(item => {
			item.setAttribute('draggable', 'false');
			item.classList.add('item-disabled');
		});

		voteBtn.disabled = false;
	} else {
		unchosenItems.forEach(item => {
			item.setAttribute('draggable', 'true');
			item.classList.remove('item-disabled');
		});

		voteBtn.disabled = true;
	}
};
