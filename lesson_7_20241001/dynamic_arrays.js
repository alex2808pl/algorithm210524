class DynamicArray {
    constructor() {
        this.array = new Array(1);
        this.count = 0; // текущее количество элементов
        this.size = 1; //размер нашего внутреннего массивы
        this.k = 2; // коэфициент расширения
    }

    // добавляем элементы в конец 
    add(data) {
        //расширяем массив
        if(this.count === this.size) {
            this.growSize();
        }

        this.array[this.count] = data;
        this.count++;

    }
    // расширяем внутренний массив
    growSize() {
        let temp = new Array(this.size * this.k);
        for(let i=0; i<this.size; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp; 
        this.size = this.size * this.k;
    }

    // добавление по индексу
    addAt(index, data) {
        //расширяем массив
        if (this.count === this.size) { 
            this.growSize();
        }

        // смещаем на единицу вправо, освобождая место по index
        for (let i = this.count - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i]; 
        }
        //вставляем элемент
        this.array[index] = data; 
        this.count++;
    }

    //удаляем последний элемент    
    remove() {
        if (this.count > 0) {
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

    //удаление по индексу
    removeAt(index) {
        if (this.count > 0) {
            for (let i = index; i < this.count - 1; i++) {
                this.array[i] = this.array[i + 1]; 
            }
            this.array[this.count - 1] = undefined;
            this.count--;
        }
    }

}

let da = new DynamicArray();
da.add(1);
da.add(2);
da.add(3);
da.add(4);
da.add(5);
da.add(6);
da.add(7);
da.add(8);
da.add(9);

da.addAt(4, 11);

console.log("Элементы DynamicArray:")
for(let i=0; i<da.count; i++) {
    console.log(da.array[i]+" ");
}

da.remove();
da.removeAt(4);
console.log("Элементы DynamicArray:")
for(let i=0; i<da.count; i++) {
    console.log(da.array[i]+" ");
}

