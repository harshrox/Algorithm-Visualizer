export class PriorityQueue<T> {
    private heap: { item: T; priority: number }[];

    constructor() {
        this.heap = [];
    }

    enqueue(item: T, priority: number) {
        this.heap.push({ item, priority });
        this.bubbleUp();
    }

    dequeue(): T | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!.item;

        const root = this.heap[0].item;
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return root;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority >= this.heap[parentIndex].priority) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild].priority < this.heap[smallest].priority) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild].priority < this.heap[smallest].priority) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
