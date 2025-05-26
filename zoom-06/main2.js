// Tạo hàm thực hiện những tính toán cơ bản
// Hàm sẽ nhận vào 3 tham số: operator, a, b

/* operator: '+', '-', '*', '/'
 * a, b là 2 số cần tính toán
 * Hãy sử dụng switch...case để xử lý các phép tính dựa trên phần operator phía trên. ngoài ra
 * Nếu b = 0, (a/b) khi thực hiện phép chia, trả về "Không thể chia cho 0"
 * Nếu operator nằm ngoài các phép tính trên (%, , ...) trả về "Phép tính không hợp lệ"
 */


function calculator(operator, a, b) {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      result = (b != 0) ? (a / b) : "Phép tính không hợp lệ";
      break;

    default:
      result = "Phép tính không hợp lệ";
  }

  return result;
}

var result = calculator('+', 3, 5); // 8
console.log(result);
