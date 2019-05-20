// 생성자 함수
function Product(name, price) {
    this.name = name;
    this.price = price;
}
// 프로토타입에 메소드를 선언합니다.
// prototype : 이 소속된 모든 형태에 대해?
Product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
};
// 상품 목록을 선언합니다.
// 생성자 함수를 통해 6개의 클래스 객체를 생성하고, 배열 안에 집어넣음. 배열변수. 배열의 각 값은 객체
// 자세한 설명은 ppt에
let products = [
    new Product('바나나', 1200),
    new Product('사과', 2000),
    new Product('배', 3000),
    new Product('고구마', 700),
    new Product('감자', 600),
    new Product('수박', 5000)
];
// 반복해서 출력합니다.
for (let product of products) {
    product.print();
}